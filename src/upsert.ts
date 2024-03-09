import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const upsert = async () => {
  const updertData = await prisma.post.upsert({
    where: {
      id: 9,
    },
    update: {
      authorName: "Upsert",
    },
    create: {
      title: "Upsert Title",
      content: "Upsert Content",
    },
  });

  console.log(updertData);
};

export default upsert;
