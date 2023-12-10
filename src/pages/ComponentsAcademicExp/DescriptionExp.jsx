import ChatGPTLovers from '../../statics/imageWelcomeGPT.webp';
import ChatGPTLovers1 from '../../statics/chatgept.webp';
import DescriptionExp from '../../statics/DescriptionExpAcademic.webp';
import '../../style/AcademicExperience/DescriptionExp.css';

export const DescriptionAcademicExp = () => {
  return (
    <div className="container-experienceWelcomeCircle">
      <div className="container-circleExperience"></div>

      <div className="container-firstDescription">
        <div className="container-firstDescriptionImg">
          <img src={DescriptionExp} alt="" className='container-experienceWelcomeFirst' />
        </div>

        <div className="container-Description4">
          <p>
            Nuestra Experiencia Académica está diseñada para impulsar el éxito y la innovación en el
            campo de la Ingeniería Informática. Ofrecemos una gama completa de cursos que cubren desde
            fundamentos de programación hasta sistemas complejos y desarrollo de software avanzado. Cada
            curso es una oportunidad para profundizar en conocimientos especializados, apoyados por una
            amplia selección de recursos de estudio y plataformas interactivas. Complementa tu aprendizaje
            con nuestros blogs y consejos, donde explorarás tendencias de la industria, consejos de carrera y
            perspectivas de vanguardia en tecnología. Prepárate para una carrera rica y variada con la
            educación que te proporciona ITESCO.
          </p>

        </div>
      </div>

      <div className="container-DescriptionChatGPTLovers">
        <div className="container-Description5">
          <h1>¡Bienvenido a Chat GPT Lovers</h1>

          <p>el lugar donde la creatividad se encuentra con la adrenalina!</p>
        </div>

        <div className="container-Description6">
          <div className="container-experienceDesc6">
            <p>
              Únete a nuestra comunidad vibrante y sumérgete en un universo donde la
              programación y el gaming se fusionan. ¿Eres un amante de la innovación y la
              emoción de los videojuegos? Este es tu hogar. Conéctate con mentes brillantes,
              comparte tus proyectos, descubre nuevas estrategias de juego y forma parte de
              una comunidad que vive y respira la pasión por la tecnología y la diversión.
              ¡Prepárate para una experiencia única en Chat GPT Lovers, donde la aventura
              digital nunca termina!.
            </p>

            <button>Buscanos en nuestras redes</button>
          </div>

          <img src={ChatGPTLovers} alt="" className='container-imageWelcomeGPT' />
          <img src={ChatGPTLovers1} alt="" className='container-imageChatGPT' />
        </div>
      </div>
    </div>
  );
}