import { Query, Resolver } from "@nestjs/graphql";

import { Quizz } from "../models/quizz.model";

@Resolver()
export class QuizzResolver {
  constructor() {}

  @Query(() => Quizz)
  async getQuizz(): Promise<Quizz> {
    return {
      id: "1",
      title: "Quizz 1",
      description: "This is the first quizz",
    };
  }
}
