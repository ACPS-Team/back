import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import {
  CreateCourseDto,
  InviteUsersDto,
  UpdateAttendanceDto,
  UpdateCourseDto
} from '../interfaces/course.dto'
import { TrainingCourse } from '../models/course.model'
import { CourseService } from '../services/course.service'

@Resolver(() => TrainingCourse)
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  // Admin Operations

  @Mutation(() => TrainingCourse)
  async createCourse(@Args('data') data: CreateCourseDto) {
    // TODO: check if user is admin
    return this.courseService.createCourse(data)
  }

  @Mutation(() => TrainingCourse)
  async updateCourse(@Args('id') id: string, @Args('data') data: UpdateCourseDto) {
    // TODO: check if user is admin
    return this.courseService.updateCourse(id, data)
  }

  @Mutation(() => TrainingCourse)
  async inviteUsersToCourse(
    @Args('courseId') courseId: string,
    @Args('data') data: InviteUsersDto
  ) {
    // TODO: check if user is admin
    return this.courseService.inviteUsersToCourse(courseId, data)
  }

  @Mutation(() => Boolean)
  async updateUserAttendance(
    @Args('courseId') courseId: string,
    @Args('userId') userId: string,
    @Args('data') data: UpdateAttendanceDto
  ) {
    // TODO: check if user is admin
    return this.courseService.updateUserAttendance(courseId, userId, data)
  }

  // User Operations

  @Query(() => [TrainingCourse])
  async getMyCourses(@Args('startDate', { nullable: true }) startDate?: Date) {
    return this.courseService.getCoursesByUser('1', startDate) // TODO: Get the current user ID
  }

  @Query(() => Int)
  async getAbsentDaysCount() {
    return this.courseService.getAbsentDaysCount('1') // TODO: Get the current user ID
  }
}
