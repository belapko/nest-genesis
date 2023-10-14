export declare class AppService {
    getAuth(): Promise<{
        access_token: string;
        base_domain: string;
    }>;
    postEntity(headers: Headers, domain: string, entity: string): Promise<number>;
}
