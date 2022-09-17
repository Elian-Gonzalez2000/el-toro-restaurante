const { sequelize } = require("./src/db/connection.ts");
const { app } = require("./src/app.ts");
const { PORT } = require("./config.ts");

const start = async (conn: any, server: any) => {
   try {
      await conn.authenticate();
      console.log("Connection has been established successfully.");
      await conn.sync({ force: false });
      console.log("Successful Sync ", PORT);
      server.listen(PORT, () => {
         console.log("Listening at %d", PORT);
      });
   } catch (err) {
      console.log(err);
   }
};

start(sequelize, app);
