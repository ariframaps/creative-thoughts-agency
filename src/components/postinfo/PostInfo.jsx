import Image from "next/image";

async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.json();
}

const PostInfo = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);

  return (
    <div className="flex items-center gap-7">
      <Image
        width={0}
        height={0}
        className="h-10 w-10 rounded-full bg-red-200"
      />
      <div>
        <p className="text-slate-400">Author</p>
        <p>{user.username}</p>
      </div>
      <div>
        <p className="text-slate-400">Published</p>
        <p>12.03.2022</p>
      </div>
    </div>
  );
};

export default PostInfo;
