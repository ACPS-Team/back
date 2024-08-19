import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateReservationDto, UpdateReservationDto } from '../interfaces/reservation.dto'
import { Reservation } from '../models/reservation.model'
import { ReservationService } from '../services/reservation.service'

@Resolver(() => Reservation)
export class ReservationResolver {
  constructor(private readonly reservationService: ReservationService) {}

  @Query(() => [Reservation])
  async getAllReservations(@Args('startDate', { nullable: true }) startDate?: Date) {
    return this.reservationService.getAllReservations(startDate)
  }

  @Query(() => [Reservation])
  async getMyReservations(@Args('startDate', { nullable: true }) startDate?: Date) {
    return this.reservationService.getReservationsByUserId('1', startDate) // TODO: get user id from context
  }

  @Mutation(() => Reservation)
  async createReservation(@Args('data') data: CreateReservationDto) {
    return this.reservationService.createReservation(data, '1') // TODO: get user id from context
  }

  @Mutation(() => Reservation)
  async updateReservation(@Args('id') id: string, @Args('data') data: UpdateReservationDto) {
    return this.reservationService.updateReservation(id, data)
  }

  @Mutation(() => Boolean)
  async deleteReservation(@Args('id') id: string) {
    return this.reservationService.deleteReservation(id)
  }
}
