import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  helloMovies(): string {
    return `Hello Movies!`
  }
}
