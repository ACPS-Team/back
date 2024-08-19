import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateIncidentDto, UpdateIncidentDto } from '../interfaces/incident.dto'
import { Incident } from '../models/incident.model'
import { IncidentService } from '../services/incident.service'

@Resolver(() => Incident)
export class IncidentResolver {
  constructor(private readonly incidentService: IncidentService) {}

  @Query(() => [Incident])
  async getAllIncidents() {
    return this.incidentService.getAllIncidents()
  }

  @Query(() => [Incident])
  async getIncidentsByAirplaneId(@Args('airplaneId') airplaneId: string) {
    return this.incidentService.getIncidentsByAirplaneId(airplaneId)
  }

  @Mutation(() => Incident)
  async createIncident(@Args('data') data: CreateIncidentDto) {
    return this.incidentService.createIncident(data, '1') // TODO: get user id from context
  }

  @Mutation(() => Incident)
  async updateIncident(@Args('id') id: string, @Args('data') data: UpdateIncidentDto) {
    return this.incidentService.updateIncident(id, data)
  }

  @Mutation(() => Boolean)
  async deleteIncident(@Args('id') id: string) {
    return this.incidentService.deleteIncident(id)
  }
}
