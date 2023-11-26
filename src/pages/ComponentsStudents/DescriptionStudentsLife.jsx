import studentsdescirption from '../../statics/DescriptionStudetns.webp';
export const DescriptionStudentsLife = () => {
  return (
    <div className="container-StudentsDescription2">
        <div className="container-Description2">
            <p>
            En la carrera de Ingeniería Informática de ITESCO, la vida estudiantil trasciende el aula, fusionando la pasión por la tecnología con un vibrante entorno comunitario. Aquí, los futuros ingenieros no solo programan software, sino que también construyen conexiones, participan en hackatones, y colaboran en proyectos que dejan huella. Únete a nuestra red de innovadores, creativos y soñadores.
            </p>

        </div>
        <img src={ studentsdescirption} alt="" className='container-StudentsPhoto'/>
    </div>
  );
}