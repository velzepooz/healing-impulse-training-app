import { Types } from 'mongoose';

export interface BaseInterface {
  _id?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
