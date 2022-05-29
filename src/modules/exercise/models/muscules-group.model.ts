import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { timestamps } from '../../../shared/constants/models-timestamps';
import modelNames from '../../../shared/constants/model-names.json';
import { MusculesGroupInterface } from '../interfaces/muscules-group.interface';

export type GroupDocument = MusculesGroupModel & Document;

@Schema({
  timestamps,
  versionKey: false,
  collection: modelNames.musculesGroup,
  toJSON: { virtuals: false },
})
export class MusculesGroupModel implements MusculesGroupInterface {
  @Prop({
    trim: true,
    required: true,
  })
  name: string;
}

export const GroupSchema = SchemaFactory.createForClass(MusculesGroupModel);
