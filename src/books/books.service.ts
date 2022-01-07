import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { books } from './books.data';

@Injectable()
export class BooksService {
  async findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  async findOne(id: number): Promise<Book> {
    const book = books.find((book) => book.id === id);
    return Promise.resolve(book);
  }

  async create(data: CreateBookInput): Promise<Book> {
    const book: Book = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    };
    books.push(book);

    return Promise.resolve(book);
  }

  async update(id: number, data: UpdateBookInput): Promise<Book> {
    const book = books.find((book) => book.id === id);
    return Promise.resolve(book);
  }

  async remove(id: number): Promise<boolean> {
    books.filter((book) => book.id !== id);
    return true;
  }
}
