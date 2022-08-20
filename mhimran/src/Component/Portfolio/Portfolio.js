import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
    Chip 
} from "@material-tailwind/react";
import { BsCodeSquare } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const Portfolio = () => {

    return (
        <div className='portfolio' id='portfolio'>
            <div className="container mx-auto">
                <div className="portfolio__main max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16">
                    <h1 className='text-3xl lg:text-5xl font-bold mb-12 lg:mb-16 text-center lg:text-left'>Portfolio</h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center">
                        <Card className="w-96">
                            <CardHeader className="h-80">
                                <img src="https://devmhimran.webzoogoal.com/wp-content/uploads/2022/06/find-tools-img-1024x719.png" alt="" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    MoboPedia
                                </Typography>
                                <p>A CRUD Application to store your contact phone numbers, everything at one place</p>
                                <div className="links mt-4">
                                    <a href="https://www.youtube.com/watch?v=nTxNtTmPq8A">
                                        <span className='mr-3'>
                                            <IconButton >
                                                <div className="text-xl">
                                                    <BsCodeSquare></BsCodeSquare>
                                                </div>
                                            </IconButton>
                                        </span>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=nTxNtTmPq8A">
                                        <span className='mr-3'>
                                            <IconButton color='gray-900'>
                                                <div className="text-xl">
                                                    <AiFillGithub></AiFillGithub>
                                                </div>
                                            </IconButton>
                                        </span>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=nTxNtTmPq8A">
                                        <span className='mr-3'>
                                            <IconButton color='gray-900'>
                                                <div className="text-xl">
                                                    <AiFillGithub></AiFillGithub>
                                                </div>
                                            </IconButton>
                                        </span>
                                    </a>
                                </div>
                            </CardBody>
                            <CardFooter divider className="flex items-center justify-between py-3">
                                <Chip color="blue" value="blue" variant="outlined"/>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;