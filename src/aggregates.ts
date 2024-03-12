import { PrismaClient } from "@prisma/client";
import exp from "constants";

const prisma = new PrismaClient();

const aggregates = async () => {
  //   const avgAge = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });

  //   console.log(avgAge);

  //   const sumAge = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });

  //   console.log(sumAge);

  //   const countAge = await prisma.user.aggregate({
  //     _count: {
  //       age: true,
  //     },
  //   });

  //   console.log(countAge);

  //   const countPost = await prisma.post.count();

  //   console.log(countPost);

  //   const maxAge = await prisma.user.aggregate({
  //     _max: {
  //       age: true,
  //     },
  //   });

  //   console.log(maxAge);

  //   const countName = await prisma.user.aggregate({
  //     _count: {
  //       username: true,
  //     },
  //   });

  //   console.log(countName);

  const countTitle = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  console.log(countTitle);
};

export default aggregates;
