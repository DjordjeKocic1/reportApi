import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { TokenGuard } from "src/guards/token.guard";
import { CurrentUserInterceptor } from "../users/interceptors/current-user.interceptor";
import { ReportCommentsService } from "./report-comments.service";
import { CurrentUser } from "../users/decorators/current-user.decorator";
import { CommentDto } from "./dtos/report-comment.dto";
import { ReportsGuard } from "../reports/guards/reports.guard";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/types/enums";
import { RolesGuard } from "src/guards/roles.guard";

@Controller("reports/:reportId/comments")
@UseGuards(TokenGuard, ReportsGuard, RolesGuard)
@UseInterceptors(CurrentUserInterceptor)
export class ReportCommentsController {
  constructor(private reportCommentsService: ReportCommentsService) {}

  @Get()
  getComments(@Param("reportId") reportId: string) {
    return this.reportCommentsService.getComments(reportId);
  }

  @Post()
  @Roles(Role.ADMIN, Role.MODERATOR)
  createComment(
    @Param("reportId") reportId: string,
    @CurrentUser() userId: string,
    @Body() commentDto: CommentDto
  ) {
    return this.reportCommentsService.createComment(reportId, userId, commentDto);
  }
}
