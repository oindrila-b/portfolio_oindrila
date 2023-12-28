import { NavLink } from 'react-router-dom';
import './css/Home.css';

export const Home = () => {
    return (
        <div className='container'>
            <NavLink to={"/"} style={{ textDecoration: 'none' }}>
                <div className='title'>
                    Oindrila Banerjee
                </div>
            </NavLink>
            <div>
            
            </div>
        </div>
    );
}