import { BannerImage } from "./componentsHome/BannerImage";
import { DescriptionTechnology } from "./componentsHome/DescriptionTechnology";
import { Bridge } from "./componentsHome/Bridge";
import { StudentImage } from "./componentsHome/StudentImage";
import { EngineerProfile } from "./componentsHome/EngineerProfile";
import { CarouselProjects } from "./componentsHome/CarouselProjects";
//Estilos de CSS
import '../style/main.css';
import '../style/Home/container-tecworld.css';
import { LanguagesCarousel } from "./componentsHome/LanguagesCarousel";

export const Home = () => {
    return (
        <main>
            <BannerImage />
            <div className="container-TecWorld">
                <DescriptionTechnology />
                <div className="container-circleBlue"></div>
            </div>
            <Bridge />
            <StudentImage />
            <EngineerProfile />
            <CarouselProjects />
            <LanguagesCarousel />
        </main>
    );
}