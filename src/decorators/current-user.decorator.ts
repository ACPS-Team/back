import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = context.switchToHttp().getRequest()
  return ctx.user // Assurez-vous que l'utilisateur est attaché à la requête
})
