
import Image from "next/image";
import Carousel from "../Carousel";
import { photos } from "@/data/photos";
import cherryblossom from "@/public/home/carouselone_cherryblossom.svg";
import pendant from "@/public/home/carouselone_jadependant.svg";

const CarouselOne = () => {
    return (
        <div className="relative my-[10%] flex flex-col items-center">
            <Image
                src={cherryblossom}
                alt="Cherry Blossom"
                className="absolute w-[95%] h-[95%] right-[37.5%] bottom-[37%] z-40"
            />
            <Image
                src={pendant}
                alt="Jade Pendant"
                className="absolute right-0 top-[40%] z-40"
            />           
            <Carousel photos={photos}/>
        </div>
    );
};

export default CarouselOne;

