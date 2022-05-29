import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EXERCISE_MODELS } from './exercise';

@Module({
  imports: [MongooseModule.forFeature([...EXERCISE_MODELS])],
})
export class GeneralModule {}
