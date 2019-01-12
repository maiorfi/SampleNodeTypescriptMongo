"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const contactModel_1 = require("./contactModel");
let uri = process.env.MONGODB_URI || "localhost:27017";
console.log(`MONGO_URI=${uri}`);
mongoose.connect(uri, err => {
    if (err) {
        console.warn(err);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
class ContactController {
    addNewContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newContact = new contactModel_1.Contact(req.body);
            try {
                yield newContact.save();
                res.json(newContact);
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
    getContacts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contacts = yield contactModel_1.Contact.find({});
                res.json(contacts);
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
    findContactById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = yield contactModel_1.Contact.findById(req.params.contactId);
                res.json(contact);
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
    getContactFullNameById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = yield contactModel_1.Contact.findById(req.params.contactId);
                res.json(contact.fullName());
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
    updateContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = yield contactModel_1.Contact.findByIdAndUpdate(req.params.contactId, req.body, { new: true });
                res.json(contact);
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
    deleteContact(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield contactModel_1.Contact.findByIdAndDelete(req.params.contactId);
                res.sendStatus(200);
            }
            catch (err) {
                console.warn(err);
                res.status(500).send(err);
            }
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=contactController.js.map