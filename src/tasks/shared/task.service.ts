/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly TaskModel: Model<Task>){}

    async getAll(){
        return await this.TaskModel.find().exec();
    }

    async getByID(){}
 }
