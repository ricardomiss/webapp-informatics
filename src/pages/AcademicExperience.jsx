
import { BannerImage3} from "./ComponentsAcademicExp/BannerImage3";
import { DescriptionAcademicExp} from "./ComponentsAcademicExp/DescriptionExp";
import { CarrouselCourses} from "./ComponentsAcademicExp/CarrouselCourses";
import { CarrouselLearningTips} from "./ComponentsAcademicExp/CarrouselLearningTips";
import InstituteContactForm from "./ComponentsAcademicExp/InstituteContactForm";
import Footer from "../components/Footer";

export const AcademicExperience = () => {
  return (
    <main>
      <div>AcademicExperience</div>
      < BannerImage3/>
      < DescriptionAcademicExp/>
      < CarrouselCourses/>
      < CarrouselLearningTips/>
      < InstituteContactForm/>
      < Footer/>
    </main>
  )
}
