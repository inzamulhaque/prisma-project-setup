import { PrismaClient } from "@prisma/client";
import find from "./find";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "test 2",
  //       authorName: "test 2",
  //       content: "test 2",
  //     },
  //   });

  //   console.log(result);

  const allAllDataFromDB = await prisma.post.findMany();

  console.log(allAllDataFromDB);
};

// main();

find();
