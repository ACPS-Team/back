import { Field, ID, ObjectType } from '@nestjs/graphql'

// import { TrainingModule } from './training-module.model'

@ObjectType()
export class Quiz {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  // @Field(() => TrainingModule)
  // module: TrainingModule // TODO: Uncomment this line

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}

@ObjectType()
export class QuizQuestion {
  @Field(() => ID)
  id: string

  @Field()
  title: string

  @Field(() => [String])
  options: string[]

  @Field(() => Quiz)
  quiz: Quiz

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}

@ObjectType()
export class QuizResult {
  @Field(() => ID)
  id: string

  @Field()
  score: number

  @Field(() => Quiz)
  quiz: Quiz

  @Field()
  createdAt: Date
}
