import { Injectable } from '@nestjs/common'
import { Reservation } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateReservationDto, UpdateReservationDto } from '../interfaces/reservation.dto'

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllReservations(startDate?: Date): Promise<Reservation[]> {
    return this.prismaService.reservation.findMany({
      where: startDate ? { startDate: { gte: startDate } } : {}
    })
  }

  async getReservationsByUserId(userId: string, startDate?: Date): Promise<Reservation[]> {
    return this.prismaService.reservation.findMany({
      where: {
        userId,
        startDate: startDate ? { gte: startDate } : {}
      }
    })
  }

  async createReservation(data: CreateReservationDto, userId: string): Promise<Reservation> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id: data.airplaneId } })

    await this.prismaService.user.findUniqueOrThrow({ where: { id: data.instructorId } })

    return this.prismaService.reservation.create({
      data: {
        ...data,
        userId
      }
    })
  }

  async updateReservation(id: string, data: UpdateReservationDto): Promise<Reservation> {
    await this.prismaService.reservation.findUniqueOrThrow({ where: { id } })

    return this.prismaService.reservation.update({
      where: { id },
      data
    })
  }

  async deleteReservation(id: string): Promise<boolean> {
    await this.prismaService.reservation.findUniqueOrThrow({ where: { id } })

    await this.prismaService.reservation.delete({ where: { id } })
    return true
  }
}
