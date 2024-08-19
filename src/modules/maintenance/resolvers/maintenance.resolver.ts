import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateMaintenanceDto, UpdateMaintenanceDto } from '../interfaces/maintenance.dto'
import { Maintenance } from '../models/maintenance.model'
import { MaintenanceService } from '../services/maintenance.service'

@Resolver(() => Maintenance)
export class MaintenanceResolver {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Query(() => [Maintenance])
  async getAllMaintenances() {
    return this.maintenanceService.getAllMaintenances()
  }

  @Query(() => [Maintenance])
  async getMaintenancesByAirplaneId(@Args('airplaneId') airplaneId: string) {
    return this.maintenanceService.getMaintenancesByAirplaneId(airplaneId)
  }

  @Mutation(() => Maintenance)
  async createMaintenance(@Args('data') data: CreateMaintenanceDto) {
    return this.maintenanceService.createMaintenance(data, '1') // TODO: get user id from context
  }

  @Mutation(() => Maintenance)
  async updateMaintenance(@Args('id') id: string, @Args('data') data: UpdateMaintenanceDto) {
    return this.maintenanceService.updateMaintenance(id, data)
  }

  @Mutation(() => Boolean)
  async deleteMaintenance(@Args('id') id: string) {
    return this.maintenanceService.deleteMaintenance(id)
  }
}
