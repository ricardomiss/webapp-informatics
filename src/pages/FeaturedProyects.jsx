
import { CarrouselVideo} from "./ComponentsProyects/CarrouselVideo";
import { BannerImage1 } from "./ComponentsProyects/BannerImage1";
import { DescriptionProyects} from "./ComponentsProyects/DescriptionProjects";
import { CarrouselGalery} from "./ComponentsProyects/CarrusselGalery";
import { NumberProjects} from "./ComponentsProyects/NumberProjects";
import InstituteContactForm from "./ComponentsProyects/InstituteContactForm";

export const FeaturedProyects = () => {
  return (
    <main>
      <div>FeaturedProyects</div>
      <BannerImage1 />
      <DescriptionProyects />
      <CarrouselGalery />
      <NumberProjects />
      <CarrouselVideo />
      <InstituteContactForm />
    </main>
  )
}