import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrderEntryUncheckedUpdateManyInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  makerCd?: StringFieldUpdateOperationsInput;

  @HideField()
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
