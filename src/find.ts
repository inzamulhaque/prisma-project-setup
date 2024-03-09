import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const find = async () => {
  // get all
  const allAllDataFromDB = await prisma.post.findMany();

  const allAllDataFromDBWithSelect = await prisma.post.findMany({
    select: {
      title: true,
    },
  });

  const getFirstDataFromDB = await prisma.post.findFirst({
    where: {
      published: false,
    },
  });

  const getFirstDataFromDBWithError = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  const getUniqueDataFromDB = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });

  //   const getUniqueDataFromDBWithError = await prisma.post.findUniqueOrThrow({
  //     where: {
  //       id: 10,
  //     },
  //   });

  console.log({ allAllDataFromDBWithSelect });
};

export default find;
