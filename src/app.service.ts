import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

interface Entity {
  id: number;
}
interface EntityResponse {
  _embedded: { [key: string]: Entity[] };
}
interface TBody {}

@Injectable()
export class AppService {
  async getAuth(): Promise<{ access_token: string; base_domain: string }> {
    const { data } = await axios.get<{
      access_token: string;
      base_domain: string;
    }>('https://test.gnzs.ru/oauth/get-token.php', {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': 31334466,
      },
    });
    return data;
  }

  async postEntity(
    headers: Headers,
    domain: string,
    entity: string,
  ): Promise<number> {
    const response = await axios
      .post<EntityResponse, AxiosResponse<EntityResponse, TBody>, TBody[]>(
        `https://${domain}/api/v4/${entity}`,
        [{}],
        {
          headers: {
            Authorization: headers['authorization'],
            'Content-Type': 'application/json',
          },
        },
      )
      .catch((e) => console.log(e));
    const result: EntityResponse = response && response.data;
    const entityKey = Object.keys(result._embedded)[0];
    return result._embedded[entityKey][0].id;
  }
}
