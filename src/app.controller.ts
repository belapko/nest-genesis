import { Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/oauth')
  async getAuth(): Promise<{ access_token: string; base_domain: string }> {
    return await this.appService.getAuth();
  }

  @Post('/entity/:domain/:entity')
  postEntity(
    @Headers() headers,
    @Param('domain') domain,
    @Param('entity') entity,
  ) {
    return this.appService.postEntity(headers, domain, entity);
  }
}
