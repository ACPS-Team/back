import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Quizz {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  //   @Field(() => [String])
  //   questions: string[];
}
