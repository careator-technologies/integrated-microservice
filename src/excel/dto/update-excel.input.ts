import { CreateExcelInput } from './create-excel.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateExcelInput extends PartialType(CreateExcelInput) {
  id: number;
}
