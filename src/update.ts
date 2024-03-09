import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const update = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "test 6",
  //       authorName: "test 6",
  //       content: "test 6",
  //     },
  //   });

  //   console.log(singleUpdate);

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "test 5",
  //     },

  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  const updateMany = await prisma.post.updateMany({
    where: {
      OR: [{ id: 4 }, { id: 7 }],
    },

    data: {
      authorName: "N/A",
    },
  });

  console.log(updateMany);
};

export default update;
