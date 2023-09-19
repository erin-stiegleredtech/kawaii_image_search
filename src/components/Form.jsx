'use client';
import Input from "./Input";
import Container from './Container';
import getData from '../hooks/getData';
import { useState } from "react";


const Form = () => {

    const [image, setImage] = useState('')
    const [valueState, setValueState] = useState("");


    const handleValue = (event) => {
        let value = event.target.value;
        setValueState(value);
        console.log(valueState);
    }
    
    async function handleClick() {
        let data = await getData(valueState);
        console.log(data.items[1]);
        setImage(data.items[1].link)
    }


    return (
        <Container size={image}>
            <h2 className='text-xl text-center'>Give me one word and I will give you an image</h2>
            <Input onChange={handleValue}></Input>
            <button
                className='bg-amber-200 w-200 py-2 px-3 rounded hover:bg-transparent hover:ring-1 hover:ring-amber-200 hover:text-white'
                onClick={handleClick}
            >GET IMAGE</button>
            {image =='' ? <></> : <img src={image} className='w-100'></img>}         
        </Container>
    );

};

export default Form;