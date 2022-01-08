import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
// import { books } from './books.data';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepostiory: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepostiory.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepostiory.findOne(id);
  }

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const result = await this.booksRepostiory.save({ ...createBookInput });
    return result;
  }

  async update(data: UpdateBookInput): Promise<Book> {
    const result = await this.booksRepostiory.save({
      title: data.title,
    });
    return result;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.booksRepostiory.delete(id);
    return result.affected > 0;
  }
}
