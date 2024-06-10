import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image className="h-64 w-44 bg-red-200" />
        <span className="rotate-90">02.06.2024</span>
      </div>
      <div className="pe-7">
        <h3 className="my-5 text-2xl font-bold">Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          aliquam quasi beatae, omnis alias quod explicabo ex exercitationem
          illum magnam?..
        </p>
        <Link href="/blog" className="mt-5 block w-fit">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
