import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    
    @media (min-width: 992px){
        margin-top:10rem;
    }

    h1{
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        color: #666;
        margin-top: 2rem
    }
`;

const Quote = ({frase}) => {

    const {quote, author} = frase;

    return (
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>{author}</p>
        </ContenedorFrase>
    );
};

export default Quote;