import { AbstractDocument } from './../../database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class BookmarkDocument extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  userId: string;

  @Prop()
  links: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(BookmarkDocument);
