import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'new-assessment-staging.csdmg3kugxsm.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Refactor123456',
      database: 'backend-socialmedia',
      entities: [ User, Content ],
      synchronize: true,
      logging: false
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
