export const FormularyContactForm = () => {
  return (
    <div className="container-messageStraight">
    <h4>
        Manda un mensaje directo y te ayudaremos con todas tus dudas
    </h4>

    <form action="">
      <input type="text" placeholder="Nombre"/>
      <input type="email" placeholder="Correo electronico"/>
      <input type="tel" placeholder="Números de teléfono"/>
      <textarea name="textarea" rows="10" cols="50" placeholder="Mensaje"></textarea>

      <button type="submit" className="sendBtnEditStyles"> Suscribete </button>
    </form>
  </div>
  )
}