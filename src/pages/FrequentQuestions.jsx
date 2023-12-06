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
      <FormularyContactForm />
      <Footer />
    </main>

  )
}
