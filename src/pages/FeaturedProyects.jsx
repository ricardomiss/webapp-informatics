
import { CarrouselVideo} from "./ComponentsProyects/CarrouselVideo";
import { BannerImage1 } from "./ComponentsProyects/BannerImage1";
import { DescriptionProyects} from "./ComponentsProyects/DescriptionProjects";
import { CarrouselGalery} from "./ComponentsProyects/CarrusselGalery";
import { NumberProjects} from "./ComponentsProyects/NumberProjects";
import { ConnectInstitute } from "../pages/componentsHome/ConnectInstitute.jsx";
import Footer from "../components/Footer";

export const FeaturedProyects = () => {
  return (
    <main>
      <BannerImage1 />
      <DescriptionProyects />
      <CarrouselGalery />
      <NumberProjects />
      <CarrouselVideo />
      <ConnectInstitute />
      <Footer />
    </main>
  )
}