"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ContactSchema = new mongoose_1.Schema({
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
exports.ContactSchema.methods.fullName = function () {
    return this.firstName.trim() + ' ' + this.lastName.trim();
};
exports.Contact = mongoose_1.model('Contact', exports.ContactSchema);
//# sourceMappingURL=contactModel.js.map