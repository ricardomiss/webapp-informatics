import proyectsbackground from '../../statics/Proyects-background.webp';

export const BannerImage1 = () => {
  return (
    <div className="container-banner1">
        <div className="container-description1">
            <h1>
              CÓDIGO QUE MODELA EL MUNDO
            </h1>

            <p>
            Descubre los proyectos más destacados de la carrera para entender tu potencial en desarrollar proyectos propios.
            </p>
            
        </div>
        <img src={ proyectsbackground } alt="" className='container-banner1_img'/>
    </div>
  )
}
