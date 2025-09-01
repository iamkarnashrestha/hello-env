const express = require("express");
const app = express();

const ENV = process.env.APP_ENV || "local";
const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.json({ message: `Hello from ${ENV}!` }));

app.listen(PORT, () => console.log(`Server on :${PORT} (${ENV})`));
