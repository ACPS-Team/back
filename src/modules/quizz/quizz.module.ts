import { Module } from "@nestjs/common";

import { QuizzResolver } from "./resolvers/quizz.resolver";
import { QuizzService } from "./services/quizz.service";

@Module({
  providers: [QuizzResolver, QuizzService],
})
export class QuizzModule {}
