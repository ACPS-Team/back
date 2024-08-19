import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class CreateMaintenanceDto {
  @Field(() => String)
  description: string

  @Field(() => Date)
  maintenanceDate: Date

  @Field(() => ID)
  airplaneId: string
}

@InputType()
export class UpdateMaintenanceDto {
  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  maintenanceDate?: Date
}
