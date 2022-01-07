import { Book } from './entities/book.entity';
export const books = [
  {
    id: 1,
    title: 'test 1',
    author: 'Joe',
    price: 1000,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'test 2',
    author: 'Maria',
    price: 2000,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'test 3',
    author: 'Smith',
    price: 3000,
    createdAt: new Date(),
  },
] as Book[];
