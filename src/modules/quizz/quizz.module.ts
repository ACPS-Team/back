import { Module } from "@nestjs/common";

import { QuizzResolver } from "./resolvers/quizz.resolver";

@Module({
  providers: [QuizzResolver],
})
export class QuizzModule {}
