import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Instagram = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/Devmhimran-Api/devmhimran-insta-post.json')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div className='container mx-auto max-w-screen-xl lg:py-24 md:py-16 py-16'>
            <div className="instagram__heading">
                <h1 className='text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 lg:text-left text-center dark:text-white montserrat'>Instagram</h1>
            </div>
            <Marquee speed={50} gradient={false} className='pt-4 rounded-lg' pauseOnClick={true}>
                {
                    post.map((data, index) =>
                        <div key={index} className='border rounded-lg mx-3'>
                            <a href={data.link}>
                                <img className='rounded-lg w-96' src={data.thumbnail} alt={data.name} />
                            </a>
                        </div>
                    )
                }
            </Marquee>
        </div>
    );
};

export default Instagram;