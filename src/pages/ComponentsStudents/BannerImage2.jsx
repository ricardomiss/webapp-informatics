import studentsbackground from '../../statics/BannerStudents.webp';

export const BannerImage2 = () => {
  return (
    <div className="container-banner2">
        <div className="container-description2">
            <h1>
              COMUNIDAD Y CÓDIGO: VIDA ESTUDIANTIL EN INGENIERÍA INFORMÁTICA
            </h1>
        </div>
        <img src={ studentsbackground } alt="" className='container-banner2_img'/>
    </div>
  )
}
