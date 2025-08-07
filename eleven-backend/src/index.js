import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { friends } from "../utils/friends.js";
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("Server listening on http://localhost:4000");
});

app.get("/welcome", async (req, res) => {
  res.json("welcome to home page");
});

app.get("/friends", async (req, res) => {
  /*   const userFriends = await prisma.friends.findMany();
   */
  const userFriends = friends;
  res.json(userFriends);
});

app.get("/chat", async (req, res) => {
  const userFriends = friends;
  res.json(userFriends);
});

app.get("/home", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
