import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-6xl font-bold leading-tight">
          Creative
          <br />
          Thoughts
          <br />
          Agency.
        </h1>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          vero minus? Deserunt at a cumque corporis nesciunt.
        </p>
        <div className="flex gap-5">
          <button className="rounded bg-white px-10 py-5 text-black">
            Learn More
          </button>
          <button className="rounded bg-blue-600 px-10 py-5 text-white">
            Contact
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image className="h-10 w-10 bg-red-200" />
      </div>
    </div>
  );
}
