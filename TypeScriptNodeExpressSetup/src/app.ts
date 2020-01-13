/**************************************************
tsconfig setup
Uses es6 as target
output files (js) are in ./dist folder
input compile files (ts) are in ./src folder
enable module resolution to be node
**************************************************/
import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5));
  res.send("hello");
});

app.listen(5000, () => console.log("Server running"));
