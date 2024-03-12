import { PrismaClient, UserRole } from "@prisma/client";

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
  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "test 3",
  //       authorName: "test 3",
  //       content: "test 3",
  //     },
  //     {
  //       title: "test 4",
  //       authorName: "test 4",
  //       content: "test 4",
  //     },
  //     {
  //       title: "test 5",
  //       authorName: "test 5",
  //       content: "test 5",
  //     },
  //   ],
  // });
  // console.log(createMany);

  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "User2",
  //     email: "user2@user.com",
  //     role: UserRole.user,
  //   },
  // });

  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is my bio",
  //     userId: 3,
  //   },
  // });

  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "javascript",
  //   },
  // });

  // console.log(createCategory);

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "Title 1",
  //     content: "Content 1",
  //     authorId: 3,
  //     postCategory: {
  //       create: {
  //         // categoryId: 1,
  //         category: {
  //           connect: {
  //             id: 1,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });

  // console.log(createPost);

  const createPost = await prisma.post.create({
    data: {
      title: "Title 4",
      content: "Content 4",
      authorId: 3,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 4,
          },
          {
            categoryId: 5,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

export default create;
