import { Field, ID, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateReservationDto {
  @Field()
  startDate: Date

  @Field(() => Int)
  duration: number

  @Field(() => Int)
  flightDuration: number

  @Field(() => ID)
  instructorId: string

  @Field(() => ID)
  airplaneId: string
}

@InputType()
export class UpdateReservationDto {
  @Field({ nullable: true })
  startDate: Date

  @Field(() => Int, { nullable: true })
  duration: number

  @Field(() => Int, { nullable: true })
  flightDuration: number

  @Field({ nullable: true })
  isFinished: boolean

  @Field(() => ID, { nullable: true })
  instructorId?: string

  @Field(() => ID, { nullable: true })
  airplaneId?: string
}
