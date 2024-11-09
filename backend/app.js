import express from "express";
import cors from "cors";
import account_routes from "./routes/account_route.js";

const app = express();

const port = 9897;


var corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credential: true,
  optionsSuccessStatus: 204
}

app.use(express.json());
app.use(cors(corsOptions))
app.use(account_routes)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export default app;