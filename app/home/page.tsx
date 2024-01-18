import News from "./news";
import Idea from "./ideas";
import Guide from "./guide";
import Summery from "./summery";

const page = () => {
  return (
    <>
      <Summery></Summery>
      <Idea></Idea>
      <News></News>
      <Guide></Guide>
    </>
  );
};

export default page;
