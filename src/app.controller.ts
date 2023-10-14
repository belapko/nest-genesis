import { Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Получение токена аутентификации с amoCRM
  @Get('/oauth')
  async getAuth(): Promise<{ access_token: string; base_domain: string }> {
    return await this.appService.getAuth();
  }

  // Пост запрос для отправки Entity сущности на amoCRM
  @Post('/entity/:domain/:entity')
  postEntity(
    @Headers() headers,
    @Param('domain') domain,
    @Param('entity') entity,
  ) {
    return this.appService.postEntity(headers, domain, entity);
  }
}
