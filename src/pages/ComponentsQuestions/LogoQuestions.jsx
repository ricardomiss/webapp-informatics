import '../../style/FrequentQuestions/Logo.css';
import LogoAllBlue from '../../statics/LogoAllBlue.webp';

export const LogoQuestions = () => {
  return (
    <div className="container-LogoQuestions">
      <div className="container-LogoQuestions_flexElement">
          <div className="container-LogoQuestions_image">
              <img src={ LogoAllBlue } alt="" />
          </div>
          <div className="container-LogoQuestions_circle"></div>
      </div>
    </div>
  )
}