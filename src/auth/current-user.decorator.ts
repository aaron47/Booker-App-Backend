import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

export const getCurrentUserByContext = (ctx: ExecutionContext): User => {
  if (ctx.getType() === 'http') {
    return ctx.switchToHttp().getRequest().user;
  }

  const context = GqlExecutionContext.create(ctx);
  return context.getContext().req.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx),
);
