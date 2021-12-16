import {ArgumentMetadata, PipeTransform} from "@nestjs/common";
import {BoardStatus} from "../board.model";
import {IsNotEmpty} from "class-validator";

export class BoardStatusValidatorPipe implements PipeTransform {

	readonly StatusOptions = [
		BoardStatus.PRIVATE,
		BoardStatus.PUBLIC,
	]

	transform(value: any, metadata: ArgumentMetadata): any {
		value = value.toUpperCase();
		return value;
	 }
}