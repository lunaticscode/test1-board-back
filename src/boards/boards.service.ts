import {Injectable, NotFoundException} from "@nestjs/common";
import {BoardStatus} from "./board-status.enum";
import {CreateBoardDto} from "./dto/create-board.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {BoardRepository} from "./board.repository";
import {BoardEntity} from "./board.entity";

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository:BoardRepository
    ) {}

    async getAllBoards(): Promise<Array<BoardEntity>>{
        try{
           return await this.boardRepository.find();
        }catch(e){
           console.log(e);
           throw new Error(e);
        }
    }

    async getBoardById(id: number): Promise <BoardEntity> {
        try{
            const found = await this.boardRepository.findOne(id);
            if(!found){
                throw new NotFoundException(`Can't find Board with id ${id}`);
            }
            return found;
        }catch(e){
            console.log(e);
            throw new Error(e);
        }
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise <BoardEntity> {
        try{
            const {title, description} = createBoardDto;
            const board = await this.boardRepository.create({
                title, description,
                status: BoardStatus.PUBLIC
            })
            await this.boardRepository.save(board);
            return board;
        }catch(e){
            console.log(e); throw new Error(e);
        }
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

