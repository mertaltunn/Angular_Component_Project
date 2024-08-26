import express, {Request,Response} from "express";
import cors from "cors";
import { sample_components } from "./data";
import fs from 'fs';
import path from 'path';

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

app.get('/component-files/:name', (req: Request, res: Response) => {
    const componentName = req.params.name;
    const fileType = req.query.type as string; // 'html' or 'ts'
    const filePath = path.join(__dirname, `src/app/components/partials/${componentName}.component.${fileType}`);
    
    fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
    });
});

const port = 5000;

app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
