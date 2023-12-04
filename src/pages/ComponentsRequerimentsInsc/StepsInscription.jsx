import Steps1 from '../../statics/Steps1.webp';
import Steps2 from '../../statics/Steps2.webp';
import Logo from '../../statics/LogoBlack.webp';

export const StepsInscription= () => {
    return (
        <>
            <div className="container-steps_img1">
                <img src={Steps1} alt="steps_img1" />
            </div>

            <div className="container-IntroductionSteps">
                <div className="container-imageLogosteps">
                    <img src={Logo} alt="Logo-Black" />
                </div>
                <div className="container-motivatedSteps">
                    <h1>
                     SE PARTE DE NOSOTROS, TE ESTAMOS ESPERANDO
                    </h1>
                </div>
            </div>

            <div className="container-steps_img2">
                <img src={Steps2} alt="steps_img2" />
            </div>

        </>
        
    );
}