import SuccesStoriesBackground from '../../statics/Logo-White.webp';
import '../../style/SuccessStories/BannerImage6.css';

export const BannerImage6 = () => {
  return (
    <div className="container-bannerSucessStories">
        <div className="container-bannerFrequentQuestionsDescription">
           <div className="container-stories_title">
              <h1>
                  CASOS DE EXITO
                </h1>
           </div>

            <div className="container-stories_image">
                <img src={ SuccesStoriesBackground } alt="" />
            </div>
        </div>
    </div>
  )
}
