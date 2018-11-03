"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactController_1 = require("./contactController");
class Routes {
    constructor() {
        this.contactController = new contactController_1.ContactController();
    }
    routes(app) {
        app.route('/').get((req, res) => {
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
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map