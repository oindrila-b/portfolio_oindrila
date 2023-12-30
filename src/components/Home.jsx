import { NavLink } from 'react-router-dom';
import './css/Home.css';

export const Home = () => {
    return (
        <div className='container'>
            <NavLink to={"/"} style={{ textDecoration: 'none' }}>
                <div className='title-container'>
                <div className='title'>
                    ob_
                </div>
                </div>
            </NavLink>
            <div>
               
            </div>
        </div>
    );
}