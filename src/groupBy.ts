import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const groupBy = async () => {
//   const groupPost = await prisma.post.groupBy({
//     by: ["published", "authorId"],
//   });

//   console.log(groupPost);

const groupBy = async () => {
  //   const groupPost = await prisma.post.groupBy({
  //     by: "published",
  //     _count: {
  //       title: true,
  //     },
  //   });

  //   console.log(groupPost);

  const groupPostWithHaving = await prisma.post.groupBy({
    by: "published",
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _min: {
          gt: 1,
        },
      },
    },
  });

  console.log(groupPostWithHaving);
};

export default groupBy;
