import { InputType, Int, Field } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class CreateBookInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Max(100)
  @Min(0)
  exampleField: number;
}
