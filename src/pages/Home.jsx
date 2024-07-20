import React, { useEffect, useState } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);
    return (
        <div className='row'>
            {data.map((el) => (
                <MemeCard key={el.id} img={el.url} title={el.name} />
            ))}
        </div>
    );
}

export default Home;
