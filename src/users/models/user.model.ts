import { AbstractModel } from './../common/abstract.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  readonly email: string;
}
