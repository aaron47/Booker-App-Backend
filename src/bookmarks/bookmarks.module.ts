import { BookmarkSchema } from './models/bookmark.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarksRepository } from './bookmarks.repository';
import { Module } from '@nestjs/common';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './models/bookmark.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bookmark.name, schema: BookmarkSchema },
    ]),
  ],
  providers: [BookmarksResolver, BookmarksService, BookmarksRepository],
})
export class BookmarksModule {}
