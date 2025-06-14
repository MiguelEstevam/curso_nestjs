import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  getHello(): string {
    return 'Qalquer coisa.';
  }

  //@Get('exemplo')
  getExample(): string {
    return this.appService.solucionaExemplo();
  }
}
