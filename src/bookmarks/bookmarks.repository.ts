import { BookmarkDocument } from './models/bookmark.schema';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/database/abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Bookmark } from './models/bookmark.model';
import { Model } from 'mongoose';

@Injectable()
export class BookmarksRepository extends AbstractRepository<BookmarkDocument> {
  protected readonly logger = new Logger(BookmarksRepository.name);

  constructor(
    @InjectModel(Bookmark.name) bookmarkModel: Model<BookmarkDocument>,
  ) {
    super(bookmarkModel);
  }
}
