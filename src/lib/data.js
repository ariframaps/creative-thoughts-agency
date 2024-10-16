import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getSinglePost = async (postId) => {
  try {
    connectToDB();
    const singlePost = await Post.find({ postId });
    return singlePost;
  } catch (err) {
    console.log(err.message);
    throw new Error(`Failed to fetch posts!: ${err.message}`);
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const getSingleUser = async (userId) => {
  try {
    connectToDB();
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const posts = [
  {
    title: "makanan",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo velit illum mollitia et eum tenetur cupiditate voluptas possimus! Dolores?",
    id: 1,
  },
  {
    title: "minuman",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo velit illum mollitia et eum tenetur cupiditate voluptas possimus! Dolores?",
    id: 2,
  },
  {
    title: "nasi padang",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo velit illum mollitia et eum tenetur cupiditate voluptas possimus! Dolores?",
    id: 3,
  },
  {
    title: "terang bulan",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo velit illum mollitia et eum tenetur cupiditate voluptas possimus! Dolores?",
    id: 4,
  },
  {
    title: "takoyaki",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quo velit illum mollitia et eum tenetur cupiditate voluptas possimus! Dolores?",
    id: 5,
  },
];
