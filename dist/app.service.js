"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    async getAuth() {
        const { data } = await axios_1.default.get('https://test.gnzs.ru/oauth/get-token.php', {
            headers: {
                'Content-Type': 'application/json',
                'X-Client-Id': 31334466,
            },
        });
        return data;
    }
    async postEntity(headers, domain, entity) {
        const response = await axios_1.default
            .post(`https://${domain}/api/v4/${entity}`, [{}], {
            headers: {
                Authorization: headers['authorization'],
                'Content-Type': 'application/json',
            },
        })
            .catch((e) => console.log(e));
        const result = response && response.data;
        const entityKey = Object.keys(result._embedded)[0];
        return result._embedded[entityKey][0].id;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map