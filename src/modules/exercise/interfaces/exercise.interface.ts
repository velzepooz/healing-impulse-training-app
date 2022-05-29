import { Types } from 'mongoose';
import { TrainingBlockEnum } from '../enums/training-block.enum';
import { BaseInterface } from '../../../shared/interfaces/base.interface';
import { GenderEnum } from '../enums/gender.enum';

export interface RepeatsInterface {
  stages: { min: number; max: number };
  repeats: { min: number; max: number };
  execution: string;
}

export interface ExerciseInterface extends BaseInterface {
  name: string;
  effects: string[];
  healingEffect: string[]
  accent: string;
  startingPosition: string;
  execution: string;
  fixation: string;
  breathing: string;
  temp: string;
  rest: string;
  comments: string;
  repeats: {
    [GenderEnum.MALE]: RepeatsInterface[],
    [GenderEnum.FEMAIL]: RepeatsInterface[],
  }[]
  commonMistakes: string[];
  trainingBlock: TrainingBlockEnum;
  musculesGroups: Types.ObjectId[];
}
