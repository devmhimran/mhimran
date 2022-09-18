import React from 'react';
import { RiComputerLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
    Chip,
    Button
} from "@material-tailwind/react";
const PortfolioItem = ({ portfolioData }) => {
    const { name, thumbnail, description, liveSite, clientSide, serverSide, technology } = portfolioData;
    return (
        <Card className="shadow-white border border-gray-200 rounded-lg">
            <img className='rounded-t-lg' src={thumbnail} alt="" />
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <p>{description}</p>
                <div className="links mt-4">
                    <button className='inline mr-3 py-1 px-2.5 text-white bg-[#47B5FF] hover:bg-[#059bff] rounded-lg duration-300 ease-in-out'>
                        <a className='text-sm flex items-center' href={liveSite} target="_blank"><RiComputerLine className='inline mr-1'></RiComputerLine>Live</a>
                    </button>
                    {/* <a className='inline mr-3 py-0.5 p-1.5 text-white bg-[#47B5FF]  rounded-lg border-gray-800 hover:bg-gray-800 hover:text-white duration-300 ease-in-out' href="https://www.facebook.com/devmhimran01/">
                        <span className='text-xs mt-0 leading-none'>Client</span>
                    </a> */}

                    {/* <a href={liveSite} target="_blank">
                        <span className='mr-3'>
                            <IconButton >
                                <div className="text-xl">
                                    <RiComputerLine></RiComputerLine>
                                </div>
                            </IconButton>
                        </span>
                    </a> */}
                    {
                        clientSide ?
                            <>
                                <button className='inline mr-3 py-1 px-2.5 text-white bg-[#00AFC1] hover:bg-[#00cae0] rounded-lg duration-300 ease-in-out'>
                                    <a className='text-sm flex items-center' href={clientSide} target="_blank"><AiFillGithub className='inline mr-1'></AiFillGithub>Client</a>
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
                            <button className='inline mr-3 py-1 px-2.5 text-white bg-[#345B63] hover:bg-[#467b86] rounded-lg duration-300 ease-in-out'>
                                <a className='text-sm flex items-center' href={serverSide} target="_blank"><AiFillGithub className='inline mr-1'></AiFillGithub>Server</a>
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
            <CardFooter divider className="flex items-center justify-between py-3">
                <div className="technology">
                    <p className='font-semibold text-black'>Technology :</p>
                    <span>
                        <p>{technology}</p>
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PortfolioItem;