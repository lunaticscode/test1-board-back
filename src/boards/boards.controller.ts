import {Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, Put} from "@nestjs/common";
import { BoardsService } from './boards.service';
import { CreateBoardDto } from "./dto/create-board.dto";
import {BoardStatus} from "./board-status.enum";
import {BoardStatusValidatorPipe} from "./pipe/board-status-validator.pipe";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  //
  // @Get('/')
  // getAllBoards(): Array<Board> {
  //   return this.boardsService.getAllBoards();
  // }
  //
  // @Post('/create')
  // //@UsePipes(new ValidationPipe({transform: true}))
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto ): Board | null {
  //   return this.boardsService.createBoard(createBoardDto)
  // }
  //
  // @Get('/:id')
  // getBoardById(@Param('id')id: string): Board | null {
  //   return this.boardsService.getBoardById(id);
  // }
  //
  // @Delete('/id')
  // deleteBoardById(@Param ('id')id: string): void {
  //   return this.boardsService.deleteBoardById(id);
  // }
  //
  // @Put('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidatorPipe) status: BoardStatus,
  // ): Board {
  //   console.log(id);
  //   const result = this.boardsService.updateBoardStatus(id, status);
  //   console.log(result);
  //   return result;
  //   //return this.boardsService.updateBoardStatus(id, status);
  // }

}
