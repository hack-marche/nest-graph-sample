import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('books')
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: '30' })
  @Field()
  title?: string;

  @Column()
  @Field((type) => [String])
  author?: string;

  @Column({ type: 'int', unsigned: true })
  @Field((type) => Int)
  price?: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
