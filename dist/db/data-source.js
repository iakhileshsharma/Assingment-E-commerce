"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceoptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.dataSourceoptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    logging: false,
    synchronize: false
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceoptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map