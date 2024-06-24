import { Quizzes } from "@prisma/client";

import { Injectable } from "@nestjs/common";

import { PrismaService } from "@infrastructure/database/services/prisma.service";

@Injectable()
export class QuizzService {
  constructor(private readonly prismaService: PrismaService) {}

  async getQuizz(): Promise<Quizzes[]> {
    return await this.prismaService.quizzes.findMany();
  }
}
