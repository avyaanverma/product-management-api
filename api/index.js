const app = require("../src/app");
const connectToDb = require("../src/db/db");

module.exports = async (req, res) => {
    await connectToDb();
    return app(req, res);
};