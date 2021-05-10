import React, {useState}  from 'react';
import { AUTHORS } from './../../utils/constants';

export const Form = ({onAddMessage}) => {

    const [text,setText] = useState('');

    const handleChange  = (e) => {
        setText(e.target.value);
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        onAddMessage({author: AUTHORS.HUMNA, text});
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}