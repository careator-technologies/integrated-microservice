import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelResolver } from './excel.resolver';
import { BullModule } from '@nestjs/bull';
import { ExcelConsumer } from './excel.process';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'bullForExcel',
      redis: {
        port: 6379,
      },
    }),
  ],
  providers: [ExcelResolver, ExcelService, ExcelConsumer],
})
export class ExcelModule {}
