import { Post } from "../../../../lib/models";
import { connectToDB } from "../../../../lib/connectToDB";

export const GET = async (req, { params }) => {
  try {
    console.log(params.postslug);
    connectToDB();
    const post = await Post.findOne({ slug: params.postslug });
    return Response.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts!");
  }
};
