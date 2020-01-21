import { Controller, Get, Param } from '@nestjs/common';
import axios from "axios"

@Controller('movies')
export class MoviesController {
  @Get()
  async helloMovies(): Promise<any> {
    const response = await axios.get("https://5000-e4f4857b-b154-43f4-a7ab-aca8a35c630c.ws-us02.gitpod.io/movies")
    //const data = await response.json();

    console.log(response)
    return ``
  }

  @Get(":id")
  helloMovie(@Param() params): string {
    return `Hello movie with id: ${params.id}`
  }
}
