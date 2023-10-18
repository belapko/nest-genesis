export declare class AppService {
    getAuth(headers: Headers): Promise<{
        access_token: string;
        base_domain: string;
    }>;
    postEntity(headers: Headers, domain: string, entity: string): Promise<number>;
}
