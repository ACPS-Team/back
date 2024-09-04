import { Injectable } from '@nestjs/common'
import { AttendanceStatus, TrainingCourse } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import {
  CreateCourseDto,
  InviteUsersDto,
  UpdateAttendanceDto,
  UpdateCourseDto
} from '../interfaces/course.dto'

@Injectable()
export class CourseService {
  constructor(private readonly prismaService: PrismaService) {}

  // Admin Operations

  async createCourse(data: CreateCourseDto): Promise<any> {
    const { users, ...courseData } = data

    const course = await this.prismaService.trainingCourse.create({
      data: courseData,
      include: {
        module: true
      }
    })

    if (users?.length) await this.inviteUsersToCourse(course.id, { userIds: users })

    return course
  }

  async updateCourse(
    id: string,
    { isFinished, ...data }: UpdateCourseDto
  ): Promise<TrainingCourse> {
    await this.prismaService.trainingCourse.findUnique({ where: { id } })

    if (isFinished) {
      await this.prismaService.attendance.updateMany({
        where: {
          courseId: id,
          status: null
        },
        data: {
          status: AttendanceStatus.ABSENT
        }
      })
    }

    return this.prismaService.trainingCourse.update({
      where: { id },
      data: {
        ...data,
        finishedAt: isFinished ? new Date() : undefined
      }
    })
  }

  async inviteUsersToCourse(courseId: string, data: InviteUsersDto): Promise<TrainingCourse> {
    await this.prismaService.trainingCourse.findUnique({ where: { id: courseId } })

    await this.prismaService.attendance.createMany({
      data: data.userIds.map(userId => ({
        userId,
        courseId
      }))
    })

    return this.prismaService.trainingCourse.findUnique({ where: { id: courseId } })
  }

  async updateUserAttendance(
    courseId: string,
    userId: string,
    data: UpdateAttendanceDto
  ): Promise<boolean> {
    await this.prismaService.attendance.updateMany({
      where: {
        userId,
        courseId
      },
      data: {
        status: data.status
      }
    })

    return true
  }

  // User Operations

  async getCoursesByUser(userId: string, startDate?: Date): Promise<TrainingCourse[]> {
    return this.prismaService.trainingCourse.findMany({
      where: {
        startDate: startDate ? { gte: startDate } : {},
        attendances: {
          some: {
            userId
          }
        }
      }
    })
  }

  async getAbsentDaysCount(userId: string): Promise<number> {
    return this.prismaService.attendance.count({
      where: {
        userId,
        status: AttendanceStatus.ABSENT
      }
    })
  }
}
