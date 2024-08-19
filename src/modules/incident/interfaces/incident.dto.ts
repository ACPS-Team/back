import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class CreateIncidentDto {
  @Field(() => ID)
  airplaneId: string

  @Field(() => String)
  description: string

  @Field()
  date: Date

  @Field()
  mitigation: string

  @Field({ defaultValue: false })
  isAnonymized: boolean
}

@InputType()
export class UpdateIncidentDto {
  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  date?: Date

  @Field({ nullable: true })
  mitigation?: string

  @Field({ nullable: true })
  isAnonymized?: boolean
}
