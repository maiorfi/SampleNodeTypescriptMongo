import * as mongoose from 'mongoose';

import { Contact } from './contactModel';
import { Request, Response } from 'express';

let uri = process.env.MONGODB_URI;

console.log(`MONGO_URI=${uri}`);

mongoose.connect(
  uri,
  err => {
    if (err) {
      console.warn(err);
    } else {
      console.log('Connected to MongoDb');
    }
  }
);

export class ContactController {
  public async addNewContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);

    try {
      await newContact.save();
      res.json(newContact);
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }

  public async getContacts(req: Request, res: Response) {
    try {
      let contacts = await Contact.find({});
      res.json(contacts);
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }

  public async findContactById(req: Request, res: Response) {
    try {
      let contact = await Contact.findById(req.params.contactId);
      res.json(contact);
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }

  public async getContactFullNameById(req: Request, res: Response) {
    try {
      let contact = await Contact.findById(req.params.contactId);
      res.json(contact.fullName());
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }

  public async updateContact(req: Request, res: Response) {
    try {
      let contact = await Contact.findByIdAndUpdate(
        req.params.contactId,
        req.body,
        { new: true }
      );
      res.json(contact);
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }

  public async deleteContact(req: Request, res: Response) {
    try {
      await Contact.findByIdAndDelete(req.params.contactId);
      res.sendStatus(200);
    } catch (err) {
      console.warn(err);
      res.status(500).send(err);
    }
  }
}
