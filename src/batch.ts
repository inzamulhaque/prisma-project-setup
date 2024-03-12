import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "user3",
      email: "user3@user.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 7,
    },
    data: {
      age: 21,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log({ userData, updateData });
};

export default batchTransaction;
