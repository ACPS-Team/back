import { DirectiveLocation, GraphQLDirective } from "graphql";
import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { ConfigurationModule } from "@infrastructure/configuration/configuration.module";
import { LoggerModule } from "@infrastructure/logger/logger.module";

import { QuizzModule } from "@modules/quizz/quizz.module";

import { upperDirectiveTransformer } from "@common/directives/uper-case.directive";

@Module({
  imports: [
    QuizzModule,

    // CORE
    ConfigurationModule,
    LoggerModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      transformSchema: (schema) => upperDirectiveTransformer(schema, "upper"),
      playground: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: "upper",
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
