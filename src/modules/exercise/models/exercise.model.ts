import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { TrainingBlockEnum } from '../enums/training-block.enum';
import { ExerciseInterface, RepeatsInterface } from '../interfaces/exercise.interface';
import { GenderEnum } from '../enums/gender.enum';
import modelNames from '../../../shared/constants/model-names.json';
import { timestamps } from '../../../shared/constants/models-timestamps';

@Schema({
  timestamps,
  versionKey: false,
  collection: modelNames.exercise,
  toJSON: { virtuals: false },
})
export class ExerciseModel implements ExerciseInterface {
  @Prop({
    trim: true,
  })
  name: string;

  @Prop({
    trim: true,
    type: [String],
  })
  effects: string[];

  @Prop({
    type: [String],
  })
  healingEffect: string[];

  @Prop({
    trim: true,
  })
  accent: string;

  @Prop({
    trim: true,
  })
  startingPosition: string;

  @Prop({
    trim: true,
  })
  execution: string;

  @Prop({
    trim: true,
  })
  fixation: string;

  @Prop({
    trim: true,
  })
  breathing: string;

  @Prop({
    trim: true,
  })
  temp: string;

  @Prop({
    trim: true,
  })
  rest: string;

  @Prop({
    trim: true,
  })
  comments: string;

  @Prop({
    trim: true,
    type: {
      [GenderEnum.MALE]: {
        type: [{
          stages: { type: { min: { type: Number }, max: { type: Number } } },
          execution: { type: String },
          repeats: { type: Number },
        }],
      },
      [GenderEnum.MALE]: {
        type: [{
          stages: { type: { min: { type: Number }, max: { type: Number } } },
          execution: { type: String },
          repeats: { type: { min: { type: Number }, max: { type: Number } } },
        }],
      },
    },
  })
  repeats: {
    [GenderEnum.MALE]: RepeatsInterface[],
    [GenderEnum.FEMAIL]: RepeatsInterface[],
  }[];

  @Prop({
    type: [String],
  })
  commonMistakes: string[];

  @Prop({
    trim: true,
    enum: TrainingBlockEnum,
  })
  trainingBlock: TrainingBlockEnum;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: modelNames.musculesGroup,
    required: true,
  })
  musculesGroups: Types.ObjectId[];
}

export const ExerciseSchema = SchemaFactory.createForClass(ExerciseModel);
