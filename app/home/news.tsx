import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <section className="2xl:max-container relative   p-4 py-10 lg:mb-10 lg:py-20 xl:mb-20  xl:px-20 md:px-5 lg:px-16">
      <div className="flex-row   space-y-3 ">
        <div className="pb-3   ">
          <Link href={"/"}>
            <p className="font-bold text-3xl  hover:text-blue-800">
              Forex news
            </p>
          </Link>
        </div>
        <div className="grid max-sm:grid-rows-1 md:grid-cols-2  lg:grid-cols-3   md:gap-x-8  md:gap-y-3   ">
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
          <Mocknews></Mocknews>
        </div>

        <div>
          <Link href={"/"}>
            <button className="border text-center w-full h-12  sm:hidden hover:border-none hover:bg-gray-200 rounded-xl">
              Keep reading
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;

const Mocknews = () => {
  return (
    <div>
      <Link href={"/"}>
        <div className="hover:bg-slate-100 p-2 rounded-2xl flex-row  space-y-2 justify-start mb-3">
          <div className=" flex space-x-2 pl-2 justify-start ">
            <div className=" flex ">
              <Image
                src={"/pexels-jane-doan-1024248.jpg"}
                width={21}
                height={21}
                alt="?"
                className="rounded-full "
              ></Image>
            </div>
            <div className="text-sm text-slate-700"> 4 hours</div>
            <div className="text-sm text-slate-700">.</div>

            <div className="text-sm text-slate-700">reuters</div>
          </div>
          <div className=" ">
            <p className="capitalize regular-16 text-gray-30 xl:max-w-[520px] ">
              Us dollor rises early thursday ahead of tade , red boo sdfsd fs df
              sd g a f as f asga sf k,
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
