import { Injectable } from '@nestjs/common'
import { Airplane } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateAirplaneDto, UpdateAirplaneDto } from '../interfaces/airplane.dto'

@Injectable()
export class AirplaneService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllAirplanes(): Promise<Airplane[]> {
    return this.prismaService.airplane.findMany()
  }

  async getAirplaneById(id: string): Promise<Airplane> {
    return this.prismaService.airplane.findUniqueOrThrow({ where: { id } })
  }

  async createAirplane(data: CreateAirplaneDto): Promise<Airplane> {
    return this.prismaService.airplane.create({ data })
  }

  async updateAirplane(id: string, data: UpdateAirplaneDto): Promise<Airplane> {
    return this.prismaService.airplane.update({
      where: { id },
      data
    })
  }

  async deleteAirplane(id: string): Promise<boolean> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id } })

    await this.prismaService.airplane.delete({ where: { id } })
    return true
  }
}
