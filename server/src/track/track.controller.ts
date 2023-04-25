import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { Delete, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { TrackService } from './track.service';
import { Body, Param, Query, UploadedFiles } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('/tracks') // @декораторы

export class TrackController {
    constructor(private trackService: TrackService) {} //за инжекченный сервис в контроллер

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    @Get()
    getAll(@Query('count') count: number, @Query('offset') offset: number) { //count - количество треков по запросу, offset - c какого промежутка получать треки по новому запросу count
        return this.trackService.getAll(count, offset);
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.trackService.search(query);
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.trackService.getOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId) {
        return this.trackService.listen(id);
    }
}