import {Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, Put} from "@nestjs/common";
import { BoardsService } from './boards.service';
import { CreateBoardDto } from "./dto/create-board.dto";
import {BoardStatus} from "./board-status.enum";
import {BoardStatusValidatorPipe} from "./pipe/board-status-validator.pipe";
import {BoardEntity} from "./board.entity";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id:number): Promise<BoardEntity> {
    return this.boardsService.getBoardById(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardsService.createBoard(createBoardDto);
  }

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
