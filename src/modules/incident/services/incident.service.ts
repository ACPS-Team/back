import { Injectable } from '@nestjs/common'
import { Incident } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateIncidentDto, UpdateIncidentDto } from '../interfaces/incident.dto'

@Injectable()
export class IncidentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllIncidents(): Promise<Incident[]> {
    return this.prismaService.incident.findMany()
  }

  async getIncidentsByAirplaneId(airplaneId: string): Promise<Incident[]> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id: airplaneId } })

    return this.prismaService.incident.findMany({
      where: { airplaneId }
    })
  }

  async createIncident(data: CreateIncidentDto, userId: string): Promise<Incident> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id: data.airplaneId } })

    return this.prismaService.incident.create({
      data: {
        ...data,
        reporterId: userId
      }
    })
  }

  async updateIncident(id: string, data: UpdateIncidentDto): Promise<Incident> {
    await this.prismaService.incident.findUniqueOrThrow({ where: { id } })

    return this.prismaService.incident.update({
      where: { id },
      data
    })
  }

  async deleteIncident(id: string): Promise<boolean> {
    await this.prismaService.incident.findUniqueOrThrow({ where: { id } })

    await this.prismaService.incident.delete({ where: { id } })
    return true
  }
}
