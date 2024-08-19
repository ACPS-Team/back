import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateAirplaneDto, UpdateAirplaneDto } from '../interfaces/airplane.dto'
import { Airplane } from '../models/airplane.model'
import { AirplaneService } from '../services/airplane.service'

@Resolver(() => Airplane)
export class AirplaneResolver {
  constructor(private readonly airplaneService: AirplaneService) {}

  @Query(() => [Airplane])
  async getAllAirplanes() {
    return this.airplaneService.getAllAirplanes()
  }

  @Query(() => Airplane)
  async getAirplaneById(@Args('id') id: string) {
    return this.airplaneService.getAirplaneById(id)
  }

  @Mutation(() => Airplane)
  async createAirplane(@Args('data') data: CreateAirplaneDto) {
    return this.airplaneService.createAirplane(data)
  }

  @Mutation(() => Airplane)
  async updateAirplane(@Args('id') id: string, @Args('data') data: UpdateAirplaneDto) {
    return this.airplaneService.updateAirplane(id, data)
  }

  @Mutation(() => Boolean)
  async deleteAirplane(@Args('id') id: string) {
    return this.airplaneService.deleteAirplane(id)
  }
}
