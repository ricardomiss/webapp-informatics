import '../../style/Home/ConnectInstitute.css';

export const ConnectInstitute = () => {
  return (
    <div className='container-connect'>
        <h4>CONÉCTATE CON ITESCO</h4>
        <p>
            Si tienes alguna duda, pregunta o simplemente quieres saber más sobre la carrera de Ingeniería
            Informática, estamos aquí para escucharte. Completa los campos a continuación con tu información
            y tu mensaje, y nuestro equipo se pondrá en contacto contigo lo antes posible.
        </p>

        <div className="container-connect_inputs">
            <form action="">
                <input className='input-text' placeholder='Tu email' type="text" />
                <input className='input-button' type="submit" value='Suscribete'/>
            </form>
        </div>
    </div>
  )
}