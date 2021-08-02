import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateExcelInput } from './dto/create-excel.input';
import { UpdateExcelInput } from './dto/update-excel.input';
const excelToJson = require('convert-excel-to-json');

@Injectable()
export class ExcelService {

  constructor(@InjectQueue('bullForExcel') private queue: Queue) { }
  
  create(createExcelInput: CreateExcelInput) {
    return 'This action adds a new excel';
  }

  addToQueue() {
    console.log(process.cwd());
    const json = excelToJson({
      sourceFile: `./src/uploads/student.xlsx`,
    });

    json.Sheet1.shift();
    json.Sheet1.map(async (val, key) => {
      console.log(val);
      await this.queue.add('create', {
          id: val.A,
          name: val.B,
          dob: val.C,
        });
    });

    console.log('done')

    //   const student = {
    // Sheet1: [
    //   { A: 'id', B: 'name', C: 'dob' },
    //   { A: 1, B: 'mohan', C: 2000-11-10T18:29:50.000Z },
    //   { A: 2, B: 'drax', C: 1998-02-08T18:29:50.000Z }
    // ]
  }

  findAll() {
    return `This action returns all excel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excel`;
  }

  update(id: number, updateExcelInput: UpdateExcelInput) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
