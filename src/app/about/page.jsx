import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="m-auto grid h-full items-center gap-3 lg:grid-cols-2">
      <div>
        <p className="mb-12 text-xl font-bold">About Agency</p>
        <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="my-12">
          We create digital ideas that are bigger, bolder, braver, and better.
          We believe in good ideas flexibility and precission. We're world's Our
          Special Team best consulting & finance solution provider. Wide range
          of wev and software development services.
        </p>
        <div className="mb-10 flex gap-5 lg:mb-0">
          <div>
            <h4 className="mb-3 text-3xl font-bold">10 K+</h4>
            <p>Year of experience</p>
          </div>
          <div>
            <h4 className="mb-3 text-3xl font-bold">234 K+</h4>
            <p>People reached</p>
          </div>
          <div>
            <h4 className="mb-3 text-3xl font-bold">5 K+</h4>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <Image className="h-full w-full bg-red-200" />
    </div>
  );
}
