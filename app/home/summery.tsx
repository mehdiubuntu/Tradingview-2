import TabsComponent from "../components/tabs";
import HomeChart from "../components/homeChart";

const Summery =  () => {
  return (
    <section className="2xl:max-container relative   p-4 py-10 lg:mb-10 lg:py-20 xl:mb-20  xl:px-20 md:px-5 lg:px-16">
      <div className=" w-full space-y-3 p-5 mt-24 ">
        <div className=" text-3xl ">Market summary</div>
        <div className="  h-auto   ">
          <TabsComponent></TabsComponent>
        </div>
        <div className="w-full  h-80 p-3 max-md:hidden  ">
          <HomeChart></HomeChart>
        </div>
      </div>
    </section>
  );
};

export default Summery;
