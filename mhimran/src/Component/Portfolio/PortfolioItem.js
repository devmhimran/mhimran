import React from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const PortfolioItem = ({ portfolioData }) => {
    const { name, thumbnail, description, liveSite, clientSide, serverSide, technology } = portfolioData;
    return (
        <Card className="shadow-white dark:shadow-[#1f1f1f] border border-gray-200 dark:border-gray-800 dark:bg-[#1f1f1f] rounded-lg">
            <LazyLoadImage
                src={thumbnail}
                effect="blur"
                height="500"
                width="400"
            //  loading='eager'
            />
            {/* <img className='rounded-t-lg' src={thumbnail} alt="" /> */}
            <CardBody className="text-center dark:bg-[#1f1f1f]">
                <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white text-xl montserrat font-bold">
                    {name}
                </Typography>
                <p className='dark:text-gray-400 inter'>{description}</p>
                <div className="links mt-4">
                    <button className='inline mr-3 py-1 px-2.5 text-blue-600 bg-blue-400/20 hover:bg-blue-400/40 rounded-lg duration-300 ease-in-out'>
                        <a className='text-sm flex items-center inter' href={liveSite} target="_blank"><RiComputerLine className='inline mr-1'></RiComputerLine>Live</a>
                    </button>
                    {
                        clientSide ?
                            <>
                                <button className='inline mr-3 py-1 px-2.5 text-green-600 bg-green-400/20 hover:bg-green-400/40 rounded-lg duration-300 ease-in-out'>
                                    <a className='text-sm flex items-center inter' href={clientSide} target="_blank"><AiFillGithub className='inline mr-1'></AiFillGithub>Client</a>
                                </button>
                                {/* <a href={clientSide} target="_blank">
                                    <span className='mr-3'>
                                        <IconButton  >
                                            <div className="text-xl">
                                                <AiFillGithub></AiFillGithub>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a> */}
                            </> : ''
                    }
                    {
                        serverSide ? <>
                            <button className='inline mr-3 py-1 px-2.5 text-teal-600 bg-teal-400/20 hover:bg-teal-400/40 rounded-lg duration-300 ease-in-out'>
                                <a className='text-sm flex items-center inter' href={serverSide} target="_blank"><AiFillGithub className='inline mr-1'></AiFillGithub>Server</a>
                            </button>
                            {/* <a href={serverSide} target="_blank">
                                <span className='mr-3'>
                                    <IconButton  >
                                        <div className="text-xl">
                                            <AiFillGithub></AiFillGithub>
                                        </div>
                                    </IconButton>
                                </span>
                            </a> */}
                        </> : ''
                    }
                </div>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3 dark:bg-[#1f1f1f] dark:border-t-[#262524]">
                <div className="technology">
                    <p className='font-semibold text-black dark:text-white montserrat'>Technology :</p>
                    <span>
                        <p className='dark:text-gray-400 inter'>{technology}</p>
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PortfolioItem;