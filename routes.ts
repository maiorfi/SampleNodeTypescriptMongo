import { Request, Response, Application } from 'express';
import { ContactController } from './contactController';

export class Routes {
  private contactController: ContactController = new ContactController();

  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful!'
      });
    });

    // contacts
    app
      .route('/contact')
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact);

    // contact detail
    app
      .route('/contact/:contactId')
      .get(this.contactController.findContactById)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);

    // other methods
    app
      .route('/contact/fullname/:contactId')
      .get(this.contactController.getContactFullNameById);
  }
}
