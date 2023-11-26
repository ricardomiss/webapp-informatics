import { BannerImage2 } from "./ComponentsStudents/BannerImage2";
import { DescriptionStudentsLife } from "./ComponentsStudents/DescriptionStudentsLife";
import { DescriptionMomentsStudent } from "./ComponentsStudents/DescriptionMomentsStudent";
import { CarrouselEvents } from "./ComponentsStudents/CarrusselEvents";
import { CarrouselEventHighlights } from "./ComponentsStudents/CarrouselEventHighlights";
import  InstituteContactForm from "./ComponentsStudents/InstituteContactForm";
import Footer from "../components/Footer";

export const StudentLife = () => {
  return (
    <main>
      <div>StudentLife</div>
      <BannerImage2 />
      <DescriptionStudentsLife />
      <CarrouselEvents />
      <DescriptionMomentsStudent />
      <CarrouselEventHighlights />
      <InstituteContactForm  />
      <Footer />
    </main>

  )
}
