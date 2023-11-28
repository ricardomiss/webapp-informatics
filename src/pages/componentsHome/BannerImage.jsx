import imgCode from '../../statics/img-code.webp';
import '../../style/BannerImage.css';

export const BannerImage = () => {
  return (
    <div className="container-banner">
        <div className="container-description">
            <h1>
                EMPIEZA AQUÍ TU CAMINO HACIA EL ÉXITO
            </h1>

            <p>
                Descubre la Ingeniería Informática en ITESCO y lidera la innovación tecnológica
            </p>

            <button>Ver más</button>
        </div>
        <div className='container-banner_triangle'></div>
        <img src={ imgCode } alt="" className='container-banner_img'/>
    </div>
  )
}