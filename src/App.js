import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
// import Spinner from './components/Spinner';
import Quote from './components/Quote';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top:5rem;
`;

const Button = styled.button`
  background: #007d35;
  background-size : 300px;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  border: 2px solid black;
`;


const App = () => {

  const [frase, setFrase] = useState({})


  useEffect(() => {
    handleClick()
  }, [])


  const handleClick = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    setFrase(frase[0])
  }

  return (
    <Contenedor>
      <Quote 
        frase={frase} 
      />

      <Button 
        onClick={ handleClick }
      >Get Quote</Button>
    </Contenedor>
  );
}

export default App;
