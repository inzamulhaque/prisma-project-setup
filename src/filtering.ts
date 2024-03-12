import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "Title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   console.log(andFiltering);

  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "Title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   console.log(orFiltering);

  //   const notFiltering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: false,
  //         },
  //       ],
  //     },
  //   });

  //   console.log(notFiltering);

  //   const startsWithUser = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "u",
  //       },
  //     },
  //   });

  //   console.log(startsWithUser);

  //   const endsWithUser = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: ".com",
  //       },
  //     },
  //   });

  //   console.log(endsWithUser);

  //   const userNameArray = ["User1", "User3", "User5"];

  //   const userNamesByArray = await prisma.user.findMany({
  //     where: {
  //       username: {
  //         in: userNameArray,
  //       },
  //     },
  //   });

  //   console.log(userNamesByArray);

  const indepthdata = await prisma.user.findUnique({
    where: {
      id: 3,
    },

    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(indepthdata, { depth: Infinity });
};

export default filtering;
