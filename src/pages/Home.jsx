//Estilos de CSS
import '../style/main.css';
import '../style/Home/container-tecworld.css';

import { BannerImage } from './componentsHome/BannerImage';
import { DescriptionTechnology } from './componentsHome/DescriptionTechnology';
import { Bridge } from './componentsHome/Bridge';
import { StudentImage } from './componentsHome/StudentImage';
import { EngineerProfile } from './componentsHome/EngineerProfile';
import { CarouselProjects } from './componentsHome/CarouselProjects';
import { LanguagesCarousel } from './componentsHome/LanguagesCarousel';
import { ConnectInstitute } from './componentsHome/ConnectInstitute';
import Footer from '../components/Footer';



export const Home = () => {
    return (
        <>
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
                <ConnectInstitute />
            </main>

            <Footer />
        </>
    );
}