import { IsNotEmpty } from "class-validator";

export class CommentDto {
    @IsNotEmpty({ message: 'message is required' })
    message: string
}