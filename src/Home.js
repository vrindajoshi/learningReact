import { useState } from 'react';

const Home = () => {

    // name of var and set method (re-renders name, makes reactive)
    const [name, setName] = useState("mario");
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setAge(age+1);

    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>increase age!</button>
        </div>
    );
}
 
export default Home;