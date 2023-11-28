
import { BannerImage3} from "./ComponentsAcademicExp/BannerImage3";
import { DescriptionAcademicExp} from "./ComponentsAcademicExp/DescriptionExp";
import { CarrouselCourses} from "./ComponentsAcademicExp/CarrouselCourses";
import { CarrouselLearningTips} from "./ComponentsAcademicExp/CarrouselLearningTips";
import {ConnectInstitute} from '../pages/componentsHome/ConnectInstitute';
import Footer from "../components/Footer";

export const AcademicExperience = () => {
  return (
    <main>
      < BannerImage3/>
      < DescriptionAcademicExp/>
      < CarrouselCourses/>
      < CarrouselLearningTips/>
      < ConnectInstitute />
      < Footer/>
    </main>
  )
}
