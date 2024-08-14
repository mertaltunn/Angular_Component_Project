import express from "express";
import cors from "cors";
import { sample_components } from "./data";

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

// Endpoint to get all components
app.get('/api/components', (req, res) => {
  res.send(sample_components);
  console.log(sample_components + "sent from server")
});

// Endpoint to add a new component
app.post('/api/components', (req, res) => {
  const newComponent = req.body;
  sample_components.push(newComponent);
  res.status(201).send(newComponent);
  console.log("server data.ts")
});

const port = 5000;

app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
