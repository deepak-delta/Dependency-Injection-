import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskservice: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(5, 5), this.diskservice.getData()];
  }
}
