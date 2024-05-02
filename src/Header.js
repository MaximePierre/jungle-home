import './App.js';

import  {createRoot}  from 'react-dom/client';

const container = document.getElementById("root");
const root = createRoot(container);

    function Header() {
        return (
              <h1>Jungle Home</h1>
        );
}

root.render(<Header/>);

export default Header