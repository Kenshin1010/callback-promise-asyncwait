interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  tags?: string[];
}

export const users: User[] = [
  {
    id: 7,
    email: "michael.lawson@reques.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    tags: ["AAA", "BBB"],
  },
  {
    id: 8,
    email: "lindsay.ferguson@reques.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    tags: ["BBB"],
  },
  {
    id: 9,
    email: "tobias.funke@reques.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    tags: ["CCC", "BBB"],
  },
  {
    id: 10,
    email: "byron.fields@reques.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    tags: ["CCC"],
  },
  {
    id: 11,
    email: "george.ewards@reques.in",
    first_name: "George",
    last_name: "Ewards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    tags: ["AAA", "DDD"],
  },
  {
    id: 12,
    email: "rachel.howell@reques.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    tags: ["DDD"],
  },
];

export const handleUserForEach = () => {
  users.forEach((user) => {
    console.log(user.id);
  });
  console.log(users);
};

// filter => lọc dữ liệu
export const handleUser = () => {
  users.filter((user) => {
    console.log(user.id);
    return user.id > 9; // Example condition
  });
  console.log(users);
};

export const handleTagsUser = () => {
  const tagsUser = users.filter((user) => {
    // let found = false;
    // user.tags?.forEach((tag) => {
    //   if (tag === "BBB") {
    //     found = true;
    //   }
    // });
    // return found;
    // return user.tags?.some((tag) => {
    //   return tag === "BBB";
    // });
    return user.tags?.every((tag) => {
      return tag === "BBB";
    });
  });
  console.log(tagsUser);

  console.log(users);
};

export const handleFilterUser = () => {
  users.filter((user) => {
    return console.log(
      user.first_name === "Lindsay" || user.first_name === "Rachael"
    );
  });
  console.log(users);
};

export const handleFindUser = () => {
  const findUser = users.find((user) => {
    return console.log(
      user.first_name === "Lindsay" || user.first_name === "Rachael"
    );
  });
  console.log(findUser, users);
};

export const handleCustomUser = () => {
  const customUsers = users.map((user) => {
    console.log(user.email);
    return { ...user, last_name: `${user.last_name} Edited` };
  });
  console.log(customUsers, users);
};

// reduce
// =>{
//     [email]:{
//         id: ...
//         email: ...
//     }
// }
export const handleReduceUser = () => {
  const customUsersReduce = users.reduce<{ [key: string]: User }>(
    (acc, cur) => {
      // accumulate => tích luỹ => acc = {} , current
      return { ...acc, [cur.email]: cur };
    },
    {}
  );
  console.log(customUsersReduce);
  console.log({ customUsersReduceValue: Object.values(customUsersReduce) });

  const arrayUsers = Object.values(customUsersReduce).reduce<string[]>(
    (acc, cur) => {
      // acc = []
      return [...acc, cur.email];
    },
    []
  );
  console.log(arrayUsers);
};

export const handleReduceArrayTotal = () => {
  const numbers = [1, 2, 4, 1111, 222];

  const total = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(total);
};
