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
        <Card className="w-96 shadow-white border border-gray-200 rounded-lg">
            <img className='rounded-t-lg' src={thumbnail} alt="" />
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <p>{description}</p>
                <div className="links mt-4">
                    <a href={liveSite} target="_blank">
                        <span className='mr-3'>
                            <IconButton >
                                <div className="text-xl">
                                    <RiComputerLine></RiComputerLine>
                                </div>
                            </IconButton>
                        </span>
                    </a>
                    {
                        clientSide ?
                            <>
                                <a href={clientSide} target="_blank">
                                    <span className='mr-3'>
                                        <IconButton  >
                                            <div className="text-xl">
                                                <AiFillGithub></AiFillGithub>
                                            </div>
                                        </IconButton>
                                    </span>
                                </a>
                            </>: ''
                    }
                    {
                        serverSide ? <>
                            <a href={serverSide} target="_blank">
                                <span className='mr-3'>
                                    <IconButton  >
                                        <div className="text-xl">
                                            <AiFillGithub></AiFillGithub>
                                        </div>
                                    </IconButton>
                                </span>
                            </a>
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