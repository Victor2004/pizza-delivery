import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './pizza/pizza.module';
import { PizzaController } from './pizza/pizza.controller';
import { PizzaService } from './pizza/pizza.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true
    }),
    PizzaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }