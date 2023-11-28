import carrouselevent1 from '../../statics/CarouselEvent1.webp';
import carrouselevent2 from '../../statics/CarouselEvent2.webp';
import carrouselevent3 from '../../statics/CarouselEvent3.webp';
import carrouselevent4 from '../../statics/CarouselEvent4.webp';
import studentsdescirption from '../../statics/DescriptionStudetns.webp';
import '../../style/StudentLife/DescriptionStudentsLife.css';

export const DescriptionStudentsLife = () => {
  return (
    <div className="container-StudentsDescription2">
      <div className="container-Description2-first">
        <div className="container-Description2First_image">
          <img src={studentsdescirption} alt="" className='edit'/>
        </div>

        <div className="container-Description_p">
          <p>
            En la carrera de Ingeniería Informática de ITESCO, la vida estudiantil trasciende el aula,
            fusionando la pasión por la tecnología con un vibrante entorno comunitario. Aquí, los futuros
            ingenieros no solo programan software, sino que también construyen conexiones, participan en
            hackatones, y colaboran en proyectos que dejan huella. Únete a nuestra red de innovadores,
            creativos y soñadores.
          </p>
        </div>
      </div>

      { /* Sección aparte */}

      <div className="container-carousel-events">
        <div className="container-event-item"> 
            <h1>HACKATHON ANUAL ITESCO 2023</h1>
            <p>Sé parte del maratón de programación más emocionante del año. Colabora, compite y crea en 48 horas de innovación continua. ¡Prepárate para el desafío!</p>

            <div className="container-event-item_image">
                <img src={carrouselevent1} alt="Hackathon Anual ITESCO 2023" className='edit'/>
            </div>
        </div>

        <div className="container-event-item">
            <div className="container-event-item_secondImage">
                <img src={carrouselevent2} alt="Feria de Proyectos de Software ITESCO" className='edit'/>
            </div>

            <h1>FERIA DE PROYECTOS DE SOFTWARE ITESCO</h1>
            <p>Descubre las creaciones más innovadoras de nuestros estudiantes. Este evento exhibe proyectos que definen la próxima generación de la tecnología.</p>
        </div>

        <div className="container-event-item">
          <h1>SEMINARIO DE INNOVACIÓN TECNOLÓGICA</h1>
          <p>Participa en nuestro seminario y sumérgete en las últimas innovaciones en tecnología. Conecta con líderes de la industria y pioneros en investigación.</p>

          <div className="container-event-item_image">
              <img src={carrouselevent3} alt="Seminario de Innovación Tecnológica" className='edit'/>
          </div>
        </div>

        <div className="container-event-item">
            <div className="container-event-item_secondImage">
                <img src={carrouselevent4} alt="Conferencia de Seguridad Informática" className='edit'/>
            </div>
          
            <h1>CONFERENCIA DE SEGURIDAD INFORMÁTICA</h1>
            <p>Conoce a expertos en ciberseguridad y aprende sobre las últimas tendencias y técnicas para proteger el mundo digital en nuestra conferencia anual.</p>
        </div>
      </div>
    </div>
  );
}