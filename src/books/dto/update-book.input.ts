import { CreateBookInput } from './create-book.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field((type) => String, { description: 'Example field (placeholder)' })
  @Max(100)
  @Min(0)
  title: string;
}
