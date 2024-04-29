//import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom';
import  {createRoot}  from 'react-dom/client';

function Header() {
  return (
    <h1>Jungle Home</h1>
  );
}
const Root = createRoot(document.getElementById("root"));
Root.render(<Header/>);
export default Header;
