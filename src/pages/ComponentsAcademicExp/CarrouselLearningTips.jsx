import conceptKeyImage from '../../statics/conceptKeyImage.webp';
import practiceConsistentImage from '../../statics/practiceConsistentImage.webp';
import realProjectsImage from '../../statics/realProjectsImage.webp';
import learnFromMistakesImage from '../../statics/learnFromMistakesImage.webp';
import collaborateShareImage from '../../statics/collaborateShareImage.webp';
import maintainBalanceImage from '../../statics/maintainBalanceImage.webp';

import '../../style/AcademicExperience/CarrouselLearningTips.css';

export const CarrouselLearningTips = () => {
    return (
        <div className="container-carousel-tips">
            <div className="container-carousel-tips_circle"></div>

            <div className="container-carousel-tips_displayflexOne">
                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={conceptKeyImage} alt="Domina los Conceptos Clave" />
                    </div>


                    <div className="container-carousel-tips_description">
                        <h1>
                            DOMINA LOS CONCEPTOS CLAVE
                        </h1>

                        <p>
                            Enfócate en entender profundamente los conceptos básicos, ya que son la base sobre la
                            que se construyen conocimientos más avanzados.
                        </p>
                    </div>
                </div>

                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={practiceConsistentImage} alt="Práctica Consistente" className="container-tip-image" />
                    </div>

                    <div className="container-carousel-tips_description">
                        <h1>
                            PRÁCTICA CONSISTENTE
                        </h1>

                        <p>
                            La programación y otras habilidades informáticas se benefician enormemente de la práctica regular. Dedica tiempo cada día
                            para codificar y resolver problemas.
                        </p>
                    </div>
                </div>

                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={realProjectsImage} alt="Trabaja en Proyectos Reales" className="container-tip-image" />
                    </div>

                    <div className="container-carousel-tips_description">
                        <h1>
                            TRABAJA EN PROYECTOS REALES
                        </h1>

                        <p>
                            Aplica lo que aprendes en proyectos personales o grupales. Esto no solo fortalece tu comprensión, sino que también enriquece
                            tu portafolio.
                        </p>
                    </div>
                </div>

                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={learnFromMistakesImage} alt="Aprende de los Errores" className="container-tip-image" />
                    </div>

                    <div className="container-carousel-tips_description">
                        <h1>
                            APRENDE DE LOS ERRORES
                        </h1>

                        <p>
                            No temas cometer errores; son tus mejores maestros. Analiza y aprende de cada error para mejorar tu habilidad.
                        </p>
                    </div>
                </div>

                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={collaborateShareImage} alt="Colabora y Comparte" className="container-tip-image" />
                    </div>

                    <div className="container-carousel-tips_description">
                        <h1>
                            COLABORA Y COMPARTE
                        </h1>

                        <p>
                            La ingeniería informática es a menudo un esfuerzo de equipo. Participa en grupos de estudio y proyectos colaborativos para
                            aprender de tus compañeros.
                        </p>
                    </div>
                </div>

                <div className="container-tip-item">
                    <div className="container-carousel-tips_img">
                        <img src={maintainBalanceImage} alt="Mantén el Equilibrio" className="container-tip-image" />
                    </div>

                    <div className="container-carousel-tips_description">
                        <h1>
                            MANTÉN EL EQUILIBRIO
                        </h1>

                        <p>
                            Balancea tu vida académica con actividades recreativas y descanso adecuado para mantener un rendimiento óptimo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}