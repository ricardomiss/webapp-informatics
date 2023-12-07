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
      <div className="container-messageStraight">
        <h4>
            Manda un mensaje directo y te ayudaremos con todas tus dudas
        </h4>

        <form action="">
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Correo electronico"/>
          <textarea name="textarea" rows="10" cols="50" placeholder="Mensaje"></textarea>

          <button type="submit" className="sendBtnEditStyles"> Suscribete </button>
        </form>
      </div>
      < Footer />
    </main>
     
  )
}
