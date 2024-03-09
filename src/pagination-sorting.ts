import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSoring = async () => {
  // offset pagination
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });
  //   console.log({ offsetData });

  // cursor based pagination
  //   const cursorData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 15,
  //     },
  //   });

  //   console.log(cursorData);

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 2,
    take: 2,
    where: {
      title: "test 3",
    },
  });

  console.log("sorted data: ", sortedData);
};

export default paginationSoring;
