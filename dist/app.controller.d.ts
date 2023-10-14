import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAuth(): Promise<{
        access_token: string;
        base_domain: string;
    }>;
    postEntity(headers: any, domain: any, entity: any): Promise<number>;
}
