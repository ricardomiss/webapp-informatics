import { BannerImage } from "./componentsHome/BannerImage";
import '../style/main.css';
import '../style/Home/container-tecworld.css';
import { DescriptionTechnology } from "./componentsHome/DescriptionTechnology";
import { Bridge } from "./componentsHome/Bridge";
import { StudentImage } from "./componentsHome/StudentImage";

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
        </main>
    );
}