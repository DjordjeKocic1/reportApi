import { Body, Controller, Param, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { TokenGuard } from "src/guards/token.guard";
import { CurrentUserInterceptor } from "../users/interceptors/current-user.interceptor";
import { ReportCommentsService } from "./report-comments.service";
import { CurrentUser } from "../users/decorators/current-user.decorator";
import { CommentDto } from "./dtos/report-comment.dto";
import { ReportsGuard } from "../reports/guards/reports.guard";

@Controller("reports/:reportId/comments")
@UseGuards(TokenGuard, ReportsGuard)
@UseInterceptors(CurrentUserInterceptor)
export class ReportCommentsController {
  constructor(private commentService: ReportCommentsService) {}

  @Post()
  createComment(
    @Param("reportId") reportId: string,
    @CurrentUser() userId: string,
    @Body() commentDto: CommentDto
  ) {
    return this.commentService.create(
      reportId,
      userId,
      commentDto
    );
  }
}
