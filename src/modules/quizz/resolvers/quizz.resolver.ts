import { Quizzes } from "@prisma/client";

import { Query, Resolver } from "@nestjs/graphql";

import { Quizz } from "../models/quizz.model";
import { QuizzService } from "../services/quizz.service";

@Resolver()
export class QuizzResolver {
  constructor(private readonly quizzService: QuizzService) {}

  @Query(() => [Quizz])
  async getQuizz(): Promise<Quizzes[]> {
    return await this.quizzService.getQuizz();
  }
}
