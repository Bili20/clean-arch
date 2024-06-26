import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/models/entities/book.entity';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: [BookEntity],
      synchronize: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
