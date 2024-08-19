import { Field, ID, InputType, Int } from '@nestjs/graphql'
import { ReservationStatus } from '@prisma/client'

@InputType()
export class CreateReservationDto {
  @Field()
  startTime: Date

  @Field(() => Int)
  durationEst: number

  @Field(() => ID)
  airplaneId: string
}

@InputType()
export class UpdateReservationDto {
  @Field(() => Int, { nullable: true })
  durationEst?: number

  @Field(() => Int, { nullable: true })
  durationReal?: number

  @Field(() => ID, { nullable: true })
  airplaneId?: string

  @Field(() => ReservationStatus, { nullable: true })
  status?: ReservationStatus
}
