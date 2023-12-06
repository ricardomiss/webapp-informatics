export const FormularyContactForm = () => {
  return (
    <div className='container-contact-form'>
        <div className='container-contact-header'>
            <h2 className='container-contact-heading'>MANDA UN MENSAJE DIRECTO Y TE AYUDAREMOS CON TODAS TUS DUDAS</h2>
        </div>
        <form className="container-contact-form-body">
            <div className='container-contact-field'>
                <input className='container-contact-input-text' placeholder='Nombre' type="text" />
            </div>
            <div className='container-contact-field'>
                <input className='container-contact-input-text' placeholder='Correo electronico' type="email" />
            </div>
            <div className='container-contact-field'>
                <textarea className='container-contact-input-textarea' placeholder='Mensaje'></textarea>
            </div>
            <div className='container-contact-field'>
                <input className='container-contact-input-submit' type="submit" value='Suscribete'/>
            </div>
        </form>
    </div>
  )
}