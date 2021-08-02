import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExcelService } from './excel.service';
import { CreateExcelInput } from './dto/create-excel.input';
import { UpdateExcelInput } from './dto/update-excel.input';
import { createWriteStream } from 'fs';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { Logger } from '@nestjs/common';
import { Upload } from 'src/types/Upload';
import { HttpException } from '@nestjs/common';

@Resolver('Excel')
export class ExcelResolver {
  constructor(private readonly excelService: ExcelService) {}

  @Mutation('createExcel')
  create(@Args('createExcelInput') createExcelInput: CreateExcelInput) {
    return this.excelService.addToQueue();
  }

  
  @Mutation(() => Boolean)
  async uploadFile(
    @Args({
      name: 'file',
      type: () => GraphQLUpload,
    })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    console.log('in mutation');
    return new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(`../uploads/${filename}`))
        // .this.excelService.uploadFile(createReadStream, filename)
        .on('finish', () => resolve(true))
        .on('error', (e) => {
          reject(false);
          Logger.log(e, 'rejected');
        
        })}
    )

  }


  // return new Promise(async (resolve, reject) => {
  //     createReadStream()
  //       .pipe(createWriteStream(`./uploads/${filename}`))
  //       .on('finish', () => resolve(true))
  //       .on('error', (e) => {
  //         reject(false);
  //         Logger.log(e, 'rejected');
        
  //       })}
  //   )

  // curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"mutation uploadFile($file: Upload!){\n  uploadFile(file:$file)\n}"}' --compressed

  @Query('excel')
  findAll() {
    return this.excelService.findAll();
  }

  // @Query('excel')
  // findOne(@Args('id') id: number) {
  //   return this.excelService.findOne(id);
  // }

  // @Mutation('updateExcel')
  // update(@Args('updateExcelInput') updateExcelInput: UpdateExcelInput) {
  //   return this.excelService.update(updateExcelInput.id, updateExcelInput);
  // }

  // @Mutation('removeExcel')
  // remove(@Args('id') id: number) {
  //   return this.excelService.remove(id);
  // }
}
