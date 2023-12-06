import RequerimentBackground from '../../statics/Logo-White.webp';
import '../../style/RequirementsInscription/BannerImage4.css';

export const BannerImage4 = () => {
  return (
    <div className="container-requerimentBanner">
        <div className="container-requerimentBannerImage">
            <img src={ RequerimentBackground } alt="" />
        </div>

        <div className="container-requerimentDescription">
            <h1>
              Inicia tu Viaje en Ingeniería Informática: Proceso de Inscripción
            </h1>
        </div>
    </div>
  )
}
