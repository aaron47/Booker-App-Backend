import { UpdateBookmarkInput } from './dto/update-bookmark-input.dto';
import { GetBookmarkArgs } from './dto/args/get-bookmark-args.dto';
import { User } from 'src/users/models/user.model';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { GqlAuthGuard } from './../auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './models/bookmark.model';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Resolver(() => Bookmark)
export class BookmarksResolver {
  constructor(private readonly bookmarksSerivce: BookmarksService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async createBookmark(
    @Args('createBookmarkData') createBookmarkData: CreateBookmarkInput,
    @CurrentUser() user: User,
  ) {
    return this.bookmarksSerivce.createBookmark(createBookmarkData, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Bookmark)
  async updateBookmark(
    @Args('updateBookmarkData') updateBookmarkData: UpdateBookmarkInput,
    @CurrentUser() user: User,
  ) {
    return this.bookmarksSerivce.updateBookmark(updateBookmarkData, user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Bookmark], { name: 'bookmarks' })
  async getBookmarks(@CurrentUser() user: User) {
    return this.bookmarksSerivce.getBookmarks(user._id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Bookmark, { name: 'bookmark' })
  async getBookmark(
    @Args() getBookmarkArgs: GetBookmarkArgs,
    @CurrentUser() user: User,
  ) {
    return this.bookmarksSerivce.getBookmark(getBookmarkArgs, user._id);
  }
}
