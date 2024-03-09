import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {
  // create single data into db
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "test 2",
  //       authorName: "test 2",
  //       content: "test 2",
  //     },
  //   });

  //   console.log(result);

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "test 3",
        authorName: "test 3",
        content: "test 3",
      },

      {
        title: "test 4",
        authorName: "test 4",
        content: "test 4",
      },

      {
        title: "test 5",
        authorName: "test 5",
        content: "test 5",
      },
    ],
  });

  console.log(createMany);
};

export default create;
