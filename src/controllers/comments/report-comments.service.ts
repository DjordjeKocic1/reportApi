import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ReportComment } from "./report-comments.schema";
import { CommentDto } from "./dtos/report-comment.dto";

@Injectable()
export class ReportCommentsService {
  constructor(
    @InjectModel(ReportComment.name)
    private comments: Model<ReportComment>
  ) {}

  async create(userId: string, reportId:string, commentDto: CommentDto) {
      const comment = new this.comments({
        reportId,
        userId,
        message: commentDto.message
      });
      return await comment.save();
    }
}
