import { Document, Schema, Model, model } from 'mongoose';

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  createdAt: Date;
}

export interface IContactModel extends IContact, Document {
  fullName(): string;
}

export const ContactSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ContactSchema.methods.fullName = function(): string {
  return this.firstName.trim() + ' ' + this.lastName.trim();
};

export const Contact: Model<IContactModel> = model<IContactModel>(
  'Contact',
  ContactSchema
);
