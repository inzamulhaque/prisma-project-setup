import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // fluent api
  //   const userWithPost = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 3,
  //       },
  //     })
  //     .post();

  //   console.log(userWithPost);

  //   const userWithPost = await prisma.user.findUnique({
  //     where: {
  //       id: 3,
  //     },

  //     include: {
  //       post: true,
  //     },
  //   });

  //   console.log(userWithPost);

  // relational fillters

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

export default relationalQueries;
