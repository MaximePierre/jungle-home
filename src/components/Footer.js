import { useState } from 'react'
import '../styles/Footer.css'

const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

export default function Footer() {
	const [inputValue, setInputValue] = useState('')
    const [errMes, setErrMess] = useState("")
    let err = <p style={"color:red;"}>Oups une erreur c'est produite veuillez reesayer</p>
    let succes = <p>Bravo</p>
    function handleInput(e){
        setInputValue(e.target.value)
    }
    function handleBlur(){
        if (!validEmail.test(inputValue)) {
            setErrMess(err); 
            console.log(errMes)
            }else{ 
            setErrMess(succes)
            console.log(errMes)
         }
    }       

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre email :
                <input
                    type="email"
                    placeholder='Entrez votre email'
                    value={inputValue}
                     onChange={handleInput}
                     onBlur={handleBlur}
                    />
                {errMes}
            </div>


		</footer>
	)
}