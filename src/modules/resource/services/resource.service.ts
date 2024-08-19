import { Injectable } from '@nestjs/common'
import { Resource } from '@prisma/client'

import { PrismaService } from '@infrastructure/database/services/prisma.service'

import { CreateResourceDto, UpdateResourceDto } from '../interfaces/resource.dto'

@Injectable()
export class ResourceService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllResources(): Promise<Resource[]> {
    return this.prismaService.resource.findMany()
  }

  async getMyResources(userId: string): Promise<Resource[]> {
    return this.prismaService.resource.findMany({
      where: {
        OR: [{ userId: null }, { userId }]
      }
    })
  }

  async createResource(data: CreateResourceDto): Promise<Resource> {
    return this.prismaService.resource.create({ data })
  }

  async updateResource(id: string, data: UpdateResourceDto): Promise<Resource> {
    await this.prismaService.resource.findUniqueOrThrow({ where: { id } })

    if (data.userId) await this.prismaService.user.findUniqueOrThrow({ where: { id: data.userId } })

    return this.prismaService.resource.update({
      where: { id },
      data
    })
  }

  async deleteResource(id: string): Promise<boolean> {
    await this.prismaService.resource.findUniqueOrThrow({ where: { id } })

    await this.prismaService.resource.delete({ where: { id } })
    return true
  }
}
