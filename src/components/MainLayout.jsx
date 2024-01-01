import bgCafe from "../assets/images/bg-cafe.jpg";
import CardContainer from "./CardContainer";
const MainLayout = () => {
  return (
    <>
      <img src={bgCafe} alt="background color" className="bg_img" />
      <CardContainer />
    </>
  );
};

export default MainLayout;
