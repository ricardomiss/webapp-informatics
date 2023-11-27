import ChatGPTLovers from '../../statics/CarouselEvent1.webp';
import ChatGPTLovers1 from '../../statics/';

export const DescriptionChatGPTLovers = () => {
  return (
    <div className="container-DescriptionChatGPTLovers">
        <div className="container-Description5">
          <h1>
            ¡Bienvenido a Chat GPT Lovers
          </h1>
          <p>
           el lugar donde la creatividad se encuentra con la adrenalina!
          </p>
        </div>

        <div className="container-Description6">
          <p>
            Únete a nuestra comunidad vibrante y sumérgete en un universo donde la programación y el gaming se fusionan. ¿Eres un amante de la innovación y la emoción de los videojuegos? Este es tu hogar. Conéctate con mentes brillantes, comparte tus proyectos, descubre nuevas estrategias de juego y forma parte de una comunidad que vive y respira la pasión por la tecnología y la diversión. ¡Prepárate para una experiencia única en Chat GPT Lovers, donde la aventura digital nunca termina!.
          </p>
          <div className="container-Description6_img">
            <img src={ ChatGPTLovers} alt="" className='container-ExpAcademicPhoto'/>
          </div>
          <div className="container-Description6_img">
            <img src={ ChatGPTLovers1} alt="" className='container-ExpAcademic1Photo'/>
          </div>
          <button>Buscanos en nuestras redes</button>
        </div>
    </div>
  );
}