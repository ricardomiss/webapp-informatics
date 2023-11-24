import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import careerlogo from '../statics/kapibara.png';
import { useState } from 'react';
import '../style/Header.css';

const navItems = [
    { id: 'one', path: '/', text: 'Home' },
    { id: 'two', path: '/featured-proyects', text: 'Proyectos destacados' },
    { id: 'three', path: '/student-life', text: 'Vida estudiantil' },
    { id: 'four', path: '/academic-experience', text: 'Experiencia Académica' },
    { id: 'five', path: '/requirements-inscription', text: 'Inscripción' },
    { id: 'six', path: '/success-stories', text: 'Historias de éxito' },
    { id: 'seven', path: '/frequent-questions', text: 'Contacto y Preguntas' },
];

export let valueEnableWindow = false;

export const Header = () => {

    const [ selectedItem, setSelectedItem ] = useState('one');
    
    const selectItem = ( liIDs ) => setSelectedItem(liIDs);
    
    const searchWindow = () => {
        console.log('Clicked Search Button!!');
    }

  return (
    <header>
        <Link to="/">
            <img 
                src={ careerlogo }
                className='career-logo'
                alt="Logo Ingeniería Informática - Universidad Instituto Tecnológico Superior De Coatzacoalcos " 
            />
        </Link>

        <FaSearch className='container-form_icon' onClick={ searchWindow }/>
     
        <nav className='container-firstNavegation'>
            <ul>
                {navItems.map(  item => (
                    <Link to={ item.path } key={ item.id }>
                        <li
                            id={ item.id }
                            onClick={ () => selectItem( item.id )}
                            style={{ display: selectedItem === item.id ? 'none' : 'block',
                                     color: 'black' }}
                        >
                            { item.text }
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    </header>
  );
}
