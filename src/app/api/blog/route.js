import { Post } from "../../../lib/models";
import { connectToDB } from "../../../lib/connectToDB";

export const GET = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return Response.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts!");
  }
};
