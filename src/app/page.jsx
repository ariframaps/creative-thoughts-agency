import Image from "next/image";

export default function HomePage() {
  return (
    <div className="m-auto grid gap-3 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
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
        <div className="mb-10 flex gap-5 lg:mb-0">
          <button className="rounded bg-white px-7 py-3 text-black">
            Learn More
          </button>
          <button className="rounded bg-blue-600 px-7 py-3 text-white">
            Contact
          </button>
        </div>
      </div>
      <Image className="bg-red-200" />
    </div>
  );
}
