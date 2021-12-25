import { JsonDB } from "async-server";

const DB = new JsonDB("./db/db.json");

export const User = DB.schema("User", {
    username: String,
    password: String
});

export default DB;