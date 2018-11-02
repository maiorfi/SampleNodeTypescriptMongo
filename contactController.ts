import * as mongoose from 'mongoose';

import { Contact } from './contactModel';
import { Request, Response } from 'express';

let uri = 'mongodb://localhost:27017/zozzerie';

mongoose.connect(
  uri,
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to MongoDb');
    }
  }
);

export class ContactController {
  public addNewContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response) {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public findContactById(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json(contact);
      }
    );
  }

  public deleteContact(req: Request, res: Response) {
    Contact.findByIdAndDelete(req.params.contactId, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

}
