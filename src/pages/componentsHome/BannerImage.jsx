import imgCode from '../../statics/img-bannerhome.webp';
import '../../style/BannerImage.css';

export const BannerImage = () => {
  return (
    <div className="container-banner">
        <div className="container-description">
            <h1>
                EMPIEZA AQUÍ TU CAMINO HACIA EL ÉXITO
            </h1>

            <p>
                Descubre la Ingeniería Informática en ITESCO y lidera la innovación tecnológica.
            </p>

            <a href="https://view.genial.ly/65714db7eb05280014d43576/interactive-content-genially-sin-titulo" target="_blank" rel="noopener noreferrer">Ver reticula</a>
        </div>
        <div className='container-banner_triangle'></div>
        <img src={ imgCode } alt="" className='container-banner_img'/>
    </div>
  )
}