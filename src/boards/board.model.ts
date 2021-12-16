import {CreateBoardDto} from "./dto/create-board.dto";

export interface Board {
	title: string;
	id: string;
	description: string;
	status: BoardStatus;
}

export enum BoardStatus {
	PUBLIC = 'PUBLIC',
	PRIVATE = 'PRIVATE',
}

export const buildBoardModel = (id: string, createBoardDto:CreateBoardDto) => {
	const { title, description } = createBoardDto;
	const model = {
		id, title, description,
		status: BoardStatus.PUBLIC,
	}
	return model;
}