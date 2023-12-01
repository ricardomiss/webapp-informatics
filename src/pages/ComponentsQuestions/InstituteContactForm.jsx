
const InstituteContactForm = () => {
  return (
    <div className='container-institute-contact1'>
        <h4 className='container-institute-contact-title1'>CONÉCTATE CON ITESCO</h4>
        <p className='container-institute-contact-description1'>
            Si tienes alguna duda, pregunta o simplemente quieres saber más sobre la carrera de Ingeniería
            Informática, estamos aquí para escucharte. Completa los campos a continuación con tu información
            y tu mensaje, y nuestro equipo se pondrá en contacto contigo lo antes posible.
        </p>

        <div className="container-institute-contact-form1">
            <form action="">
                <input className='container-institute-form-input-text' placeholder='Tu email' type="text" />
                <input className='container-institute-form-input-button' type="submit" value='Suscribete'/>
            </form>
        </div>
    </div>
  )
}

export default InstituteContactForm;