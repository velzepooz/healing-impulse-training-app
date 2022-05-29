import { MusculesGroupModel, GroupSchema } from './models/muscules-group.model';
import { ExerciseModel, ExerciseSchema } from './models/exercise.model';

export const EXERCISE_MODELS = [
  { name: MusculesGroupModel.name, schema: GroupSchema },
  { name: ExerciseModel.name, schema: ExerciseSchema },
];
