import { Controller, Get, Param } from '@nestjs/common';
import { Request } from "express"
import { Params } from 'express-serve-static-core';

@Controller('movies')
export class MoviesController {
  @Get()
  helloMovies(): string {
    return `Hello Movies!`
  }

  @Get(":id")
  helloMovie(@Param() params): string {
    return `Hello movie with id: ${params.id}`
  }
}
