import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, Length, Min, Max } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field((type) => String, { description: 'title field (placeholder)' })
  @IsString()
  @Length(1, 20)
  title: string;

  @Field((type) => String, { description: 'author field (placeholder)' })
  author: string;

  @Field((type) => Int, { description: 'price field (placeholder)' })
  @Max(1000)
  @Min(100)
  price: number;
}
