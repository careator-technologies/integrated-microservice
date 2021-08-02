import { Test, TestingModule } from '@nestjs/testing';
import { ExcelResolver } from './excel.resolver';
import { ExcelService } from './excel.service';

describe('ExcelResolver', () => {
  let resolver: ExcelResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcelResolver, ExcelService],
    }).compile();

    resolver = module.get<ExcelResolver>(ExcelResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
