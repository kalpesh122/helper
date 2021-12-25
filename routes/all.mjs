import app from "../app/express.mjs";
import next from "../app/next.mjs";

app.get("/login", (req, res) =>
    next.render(req, res, "/login")
);
