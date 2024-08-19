import { Injectable } from '@nestjs/common'
import { Maintenance } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateMaintenanceDto, UpdateMaintenanceDto } from '../interfaces/maintenance.dto'

@Injectable()
export class MaintenanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllMaintenances(): Promise<Maintenance[]> {
    return this.prismaService.maintenance.findMany()
  }

  async getMaintenancesByAirplaneId(airplaneId: string): Promise<Maintenance[]> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id: airplaneId } })

    return this.prismaService.maintenance.findMany({
      where: { airplaneId }
    })
  }

  async createMaintenance(data: CreateMaintenanceDto, userId: string): Promise<Maintenance> {
    await this.prismaService.airplane.findUniqueOrThrow({ where: { id: data.airplaneId } })

    return this.prismaService.maintenance.create({ data: { ...data, userId } })
  }

  async updateMaintenance(id: string, data: UpdateMaintenanceDto): Promise<Maintenance> {
    return this.prismaService.maintenance.update({
      where: { id },
      data
    })
  }

  async deleteMaintenance(id: string): Promise<boolean> {
    await this.prismaService.maintenance.findUniqueOrThrow({ where: { id } })

    await this.prismaService.maintenance.delete({ where: { id } })
    return true
  }
}
