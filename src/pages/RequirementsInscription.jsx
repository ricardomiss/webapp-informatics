import { BannerImage4 } from "./ComponentsRequerimentsInsc/BannerImage4"
import { ConnectInstitute } from "./ComponentsRequerimentsInsc/ConnectInstitute"
import { DescriptionRequeriments } from "./ComponentsRequerimentsInsc/DescriptionRequeriments"
import { IntroductionInstructions } from "./ComponentsRequerimentsInsc/IntroductionInstructions"
import Footer from '../components/Footer';
import { StepsInscription } from "./ComponentsRequerimentsInsc/StepsInscription";
import '../style/RequirementsInscription/container-messageStraight.css';

export const RequirementsInscription = () => {
  return (
    <main>
      < BannerImage4 />
      < DescriptionRequeriments />
      < IntroductionInstructions />
      < StepsInscription />
      < ConnectInstitute />
      < Footer />
    </main>
     
  )
}
