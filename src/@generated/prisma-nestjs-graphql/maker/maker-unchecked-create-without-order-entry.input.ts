import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutMakerInput } from '../product/product-unchecked-create-nested-many-without-maker.input';

@InputType()
export class MakerUncheckedCreateWithoutOrderEntryInput {
  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  makerCd!: string;

  @Field(() => String, { nullable: false })
  @Validator.IsNotEmpty()
  makerName!: string;

  @Field(() => Int, { nullable: false })
  leadtime!: number;

  @Field(() => Boolean, { nullable: true })
  @Validator.IsNotEmpty()
  isValid?: boolean;

  @HideField()
  createdAt?: Date | string;

  @HideField()
  updatedAt?: Date | string;

  @Field(() => ProductUncheckedCreateNestedManyWithoutMakerInput, {
    nullable: true,
  })
  product?: ProductUncheckedCreateNestedManyWithoutMakerInput;
}
