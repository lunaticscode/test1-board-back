import {Injectable, NotFoundException} from "@nestjs/common";
import { v1 as uuid } from 'uuid';
import {BoardStatus} from "./board-status.enum";
import {CreateBoardDto} from "./dto/create-board.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {BoardRepository} from "./board.repository";

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository:BoardRepository
    ) {

    }
  // private boards: Array<Board> = [];
  //
  // getAllBoards(): Array<Board> | [] {
  //   return this.boards;
  // }
  //
  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const board = buildBoardModel(uuid(), createBoardDto);
  //   this.boards.push(board);
  //   console.log(this.boards);
  //   return board;
  // }
  //
  // getBoardById(id: string): Board {
  //   const board = this.boards.find((board) => board.id === id);
  //   if(!board) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return board;
  // }
  //
  // deleteBoardById(id: string): void {
  //   const _board = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== _board.id );
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }

}

