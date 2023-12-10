import { BannerImage5 } from "./ComponentsQuestions/BannerImage5"
import { ConnectInstitute } from "./ComponentsQuestions/ConnectInstitute"
import { LogoQuestions } from "./ComponentsQuestions/LogoQuestions"
import { Questions } from "./ComponentsQuestions/Questions"
import { Questions1 } from "./ComponentsQuestions/Questions1"
import { FormularyContactForm } from "./ComponentsQuestions/FormularyContactForm"
import Footer from '../components/Footer';

export const FrequentQuestions = () => {
  return (
    <main>
      <BannerImage5 />
      <LogoQuestions />
      <Questions />
      <Questions1 />
      <ConnectInstitute/>
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
      <Footer />
    </main>

  )
}
