import { Field, ID, InputType } from '@nestjs/graphql'
import { ResourceType } from '@prisma/client'

@InputType()
export class CreateResourceDto {
  @Field()
  name: string

  @Field(() => ResourceType)
  type: ResourceType

  @Field()
  link: string

  @Field(() => ID, { nullable: true })
  userId?: string
}

@InputType()
export class UpdateResourceDto {
  @Field({ nullable: true })
  name?: string

  @Field(() => ResourceType, { nullable: true })
  type?: ResourceType

  @Field({ nullable: true })
  link?: string

  @Field(() => ID, { nullable: true })
  userId: string
}
