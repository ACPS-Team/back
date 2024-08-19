import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateAirplaneDto {
  @Field(() => String)
  name: string

  @Field(() => String)
  serialNumber: string
}

@InputType()
export class UpdateAirplaneDto {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  serialNumber?: string
}
