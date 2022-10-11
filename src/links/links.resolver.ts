import { GqlAuthGuard } from './../auth/guards/gql-auth.guard';
import { LinksService } from './links.service';
import { Args, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { GetLinksArgs } from './dto/args/get-links-args.dto';
import { UseGuards } from '@nestjs/common';
import { Link } from './links.model';

@Resolver()
export class LinksResolver {
  constructor(private readonly linksService: LinksService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [Link], { name: 'links' })
  async getLinks(@Args() getLinksArgs: GetLinksArgs) {
    return this.linksService.getLinks(getLinksArgs);
  }
}
