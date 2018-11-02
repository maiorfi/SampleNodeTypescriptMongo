import { Request, Response, Application } from "express";

export class Routes {
  public routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful!"
      });
    });

    // contact
    app
      .route("/contact")
      // GET action
      .get((req: Request, res: Response) => {
        // get all contacts
        res.status(200).send({
          message: "GET request successful!"
        });
      })
      // POST action
      .post((req: Request, res: Response) => {
        // create new contact
        res.status(200).send({
          message: "POST request successful!"
        });
      });

    // contact detail
    app
      .route("/contact/:contactId")
      // get specific contact
      .get((req: Request, res: Response) => {
        // get a single contact detail
        res.status(200).send({
          message: `GET request successful! (id=${req.params.contactId})`
        });
      })
      .put((req: Request, res: Response) => {
        // update a contact
        res.status(200).send({
          message: "PUT request successful!"
        });
      })
      .delete((req: Request, res: Response) => {
        // delete a contact
        res.status(200).send({
          message: `DELETE request successful! (id=${req.params.contactId})`
        });
      });
  }
}
