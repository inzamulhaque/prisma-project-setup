import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 8,
  //     },
  //   });

  //   console.log(singleDelete);

  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: "test 4",
    },
  });

  console.log(deleteMany);
};

export default deleteData;
