import MenImage from "../../images/image-hero-desktop.png";
import MenImageMobile from "../../images/image-hero-mobile.png";
import DataBiz from "../../images/client-databiz.svg";
import Audiophile from '../../images/client-audiophile.svg'
import Meet from '../../images/client-meet.svg'
import Maker from '../../images/client-maker.svg'
import Button from "../button";


const MainSection = () => {
  return (
    <section className="w-full h-full flex-col xl:flex-row flex mt-6 justify-between">
      <div className="order-2 xl:order-1 text-center xl:text-left xl:mt-60 ">
        <h1 className="text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}</p>
        <Button isFilled={ true }>Learn More</Button>
        <div className="flex justify-around bottom-2 w-full mt-20 xl:mt-56">
          <img className="w-30 h-5" src={DataBiz} />
          <img className="w-30 h-5" src={Audiophile} />
          <img className="w-30 h-5" src={Meet} />
          <img className="w-30 h-5" src={Maker} />
        </div>
      </div>
      <div className="hidden xl:flex w-2/4 mt-auto xl:order-2">
        <img src={ MenImage } alt="men"/>
      </div>
      <div className="flex xl:hidden w-full justify-center mb-8 order-1">
        <img src={ MenImageMobile } alt="men"/>
      </div>
    </section>
  );
};

export default MainSection;
