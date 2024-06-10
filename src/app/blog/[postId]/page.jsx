import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-full flex-col gap-10 lg:flex-row xl:gap-24">
      <div className="flex-1">
        <Image className="h-full w-full bg-red-200" />
      </div>
      <div className="flex flex-[2] flex-col gap-7 md:gap-10">
        <h1 className="text-5xl font-semibold">title number 1</h1>
        <div className="flex items-center gap-7">
          <Image
            width={0}
            height={0}
            className="h-10 w-10 rounded-full bg-red-200"
          />
          <div>
            <p className="text-slate-400">Author</p>
            <p>Arif Rama</p>
          </div>
          <div>
            <p className="text-slate-400">Published</p>
            <p>12.03.2022</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
          optio animi magni iste cupiditate accusantium esse tenetur corrupti
          eos exercitationem possimus provident, doloremque ea rerum? Natus,
          rerum obcaecati fuga facilis nobis dignissimos quod quidem similique
          iure? Eos sit blanditiis culpa quis deleniti alias libero eveniet
          tempore molestias, suscipit magnam, sequi quaerat facere vero aliquam
          itaque reiciendis nesciunt tenetur dolorem assumenda exercitationem!
          Cum at cumque provident, quasi nihil id sint velit debitis dolorem
          dolore corrupti adipisci ratione ut eligendi quo odit quaerat quae
          similique rerum impedit omnis accusamus! Ipsam eius, reprehenderit
          enim accusamus quis porro doloribus odit sit voluptatum nam.
        </p>
      </div>
    </div>
  );
};

export default page;
