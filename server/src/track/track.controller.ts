import { Controller, Get } from '@nestjs/common';
import { Delete, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { TrackService } from './track.service';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('/tracks') // @декораторы

export class TrackController {
    constructor(private trackService: TrackService) {} //за инжекченный сервис в контроллер

    @Post()
    create(@Body() dto: CreateTrackDto) {
        this.trackService.create(dto)
    }

    @Get()
    getAll() {
        return this.trackService.getAll();
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
}