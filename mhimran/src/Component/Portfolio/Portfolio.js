import React, { useState } from 'react';


import { useEffect } from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/devmhimran/dummy-api/main/Devmhimran-Api/devmhimran.json')
        .then(res => res.json())
        .then(data => setPortfolio(data))
    },[]);
    console.log(portfolio)
    return (
        <div className='portfolio bg-sky-700' id='portfolio'>
            <div className="container mx-auto">
                <div className="portfolio__main max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                    <h1 className='text-3xl lg:text-5xl font-bold mb-12 lg:mb-16 text-center lg:text-left'>Portfolio</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 justify-center">
                        {
                            portfolio.map(portfolioData => <PortfolioItem key={portfolioData.id} portfolioData={portfolioData}></PortfolioItem>)
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Portfolio;