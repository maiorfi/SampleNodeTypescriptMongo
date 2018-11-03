"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = parseInt(process.env.PORT) || 5000;
console.log(`PORT=${PORT}`);
app_1.default.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
//# sourceMappingURL=server.js.map