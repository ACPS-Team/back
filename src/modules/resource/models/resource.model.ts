import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ResourceType } from '@prisma/client'

// import { User } from '@modules/user/models/user.model'

@ObjectType()
export class Resource {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => ResourceType)
  type: ResourceType

  @Field()
  link: string

  // @Field(() => User, { nullable: true })
  // user?: User

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}

registerEnumType(ResourceType, {
  name: 'ResourceType',
  description: 'Type of a resource'
})
