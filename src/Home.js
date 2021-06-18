import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Eli');
    const [age, setAge] = useState(8);

    const handleClick = () => {
        console.log('Built By Getroman')
        setName('Heriberto');
        setAge(39);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (
        <div className='home'>
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick } >Click me</button>
            <button onClick={(e) => handleClickAgain('Getroman', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;