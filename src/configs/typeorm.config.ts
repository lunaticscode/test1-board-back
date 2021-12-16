import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ispark', //* TODO :: env, ${DB_USERNAME}
    password: '1234', //* TODO :: env, ${DB_PASSWORD}
    database: 'board-app', // * TODO :: env, ${DB_DEFAULT}
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true //* TODO :: env, ${DB_MODE} === production 일 때는 false
}