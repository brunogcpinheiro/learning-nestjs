import { Controller, Get, Param } from '@nestjs/common';
import { Request } from "express"
import { Params } from 'express-serve-static-core';

@Controller('movies')
export class MoviesController {
  @Get()
  helloMovies(): {} {
    return [
      {
        id: 1,
        title: "Joker",
        year: 2019
      },
      {
        id: 2,
        title: "Frozen II",
        year: 2020
      }
    ]
  }

  @Get(":id")
  helloMovie(@Param() params): string {
    return `Hello movie with id: ${params.id}`
  }
}
