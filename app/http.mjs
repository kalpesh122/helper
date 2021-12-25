// @ts-check
import app from "./express.mjs";
import http from "http";

export default http.createServer(app);