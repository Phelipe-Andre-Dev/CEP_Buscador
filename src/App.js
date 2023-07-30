import {useState} from 'react'
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  function buscar(){
    if (input === ''){
      alert(`Digite algum CEP...`)
      return;
    } 
    
    
    fetch(`https://viacep.com.br/ws/${input}/json/`)
    .then((response) => response.json())
    .then((data) =>{
    
        setInput(data)
        setCep(data)
        console.log(data)
      
        setInput('');

      }
    )
}

  return (
    <body className='container'>
      <div>
        <div className='h1'>
          <h1>Buscador de CEP</h1>
        </div>
  
        <div className='div'>
          <input className='input' type='number' placeholder='Digite um cep...' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='bnt' onClick={buscar} type='submit'>Buscar</button>
        </div>
      </div>
      {Object.keys(cep).length > 0 && (
         <div className='span'>
         <h2>CEP: {cep.cep}</h2>
         <span>Rua: {cep.logradouro}</span>
         <span>Bairro: {cep.bairro}</span>
         <span>Cidade: {cep.localidade}</span>
         
       </div>

      )}
     

    </body>

  )
}
export default App;
