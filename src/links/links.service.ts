import { GetLinksArgs } from './dto/args/get-links-args.dto';
import { Injectable } from '@nestjs/common';
import { getLinkPreview } from 'link-preview-js';

@Injectable()
export class LinksService {
  async getLinks(getLinksArgs: GetLinksArgs) {
    return Promise.all(
      getLinksArgs.urls.map(async (url) => getLinkPreview(url)),
    );
  }
}
