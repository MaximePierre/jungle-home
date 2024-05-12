import "../styles/Banner.css";
import logo from '../assets/logo.png';



const header = "Jungle Home";
const description = "Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍"

export default function Banner(){
                    return (
                        <div className="jh-banner">
                                <div className="jh-logo-title">
                                <img src={logo} alt='Jungle-home' className='jh-logo' />
                                <h1 className="jh-title">{header.toUpperCase()}</h1>
                                </div>
                                <p>{description}</p>
                                
                        </div>
        );
    }
// function Description(){
//         return (
//                 <p>{description}</p>
//     );
//     }