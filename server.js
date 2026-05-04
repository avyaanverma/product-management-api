const app = require('./src/app.js');
const {PORT} = require('./src/config/env.js');
const connectToDb = require("./src/db/db.js");

connectToDb();
app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost::${PORT}`);
})