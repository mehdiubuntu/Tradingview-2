import Image from "next/image";
import { Motto, UserPhoto } from "../statics/objects";
import "../globals.css";
import SliderBTN from "../components/sliderBTN";
const social = () => {
  return (
    <section className="2xl:max-container  text-white relative bg-black  px-5 py-10     xl:px-20  lg:px-16">
      <div className="  flex-row  max-md:space-y-5 md:space-y-12">
        <div className=" w-full text-center mb-10">
          <p className="  font-extrabold text-3xl md:text-5xl ">
            {" "}
            Love in every<br></br>
            #tradingview
          </p>
        </div>
        <div className="grid   max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {Motto.map((item) => (
            <div
              key={item.lable}
              className="flex-row justify-center  text-center   "
            >
              <div className="flex overflow-hidden -space-x-4  justify-center items-center ">
                <p className="text-3xl font-bold z-20 ">{item.lable}</p>
                <div className="z-10 mb-5 h-8 w-8  md:w-12 md:h-12 lg:w-16 lg:h-16 relative ">
                  <Image
                    src={item.logo!}
                    fill={true}
                    alt="?"
                    className="absolute"
                  ></Image>
                </div>
              </div>
              <p className="first-letter:capitalize">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="pt-10 relative">
          <div className="absolute   z-10 text-black top-1/2 left-8">
            <SliderBTN
              Direction={"left"}
              ElementID={"cysco"}
              BgColor={"dark"}
            ></SliderBTN>
          </div>
          <div
            id="cysco"
            className="flex overflow-x-auto space-x-5  min-h-60 min-w-54 md:h-72  lg:h-96 hide-scrollbar  scroll-smooth "
          >
            {UserPhoto.map((item) => (
              <Mocknews
                key={item.Username}
                Photolink={item.link}
                Username={item.Username}
              ></Mocknews>
            ))}
          </div>
          <div className="absolute  z-10 text-black top-1/2 right-8">
            <SliderBTN
              Direction={"right"}
              ElementID={"cysco"}
              BgColor={"dark"}
            ></SliderBTN>
          </div>
        </div>
      </div>
      <div className=" max-container relative rounded-2xl w-full mt-10">
        <Image
          src="/about-bannerwebp.png"
          alt="rock"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-3xl"
        />
      </div>
    </section>
  );
};

export default social;

const Mocknews = ({
  Photolink,
  Username,
}: {
  Photolink: string;
  Username: string;
}) => {
  return (
    <div className="hover:bg-zinc-700 p-1 rounded-xl flex-row  min-h-60 md:min-w-64 lg:min-w-80 min-w-56 ">
      <div className=" w-full relative  rounded-xl h-5/6  shadow-md bg-white ">
        <Image
          src={Photolink}
          fill={true}
          alt="?"
          className=" absolute border-none rounded-xl "
        ></Image>
      </div>

      <div className="w-full text-start  p-1 py-2">
        <p className="text-xs text-white "> @ {Username}</p>
      </div>
    </div>
  );
};
