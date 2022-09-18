import React from 'react';
import {
    Card,
    CardBody,
    Progress
} from "@material-tailwind/react";

const MySkill = () => {
    return (
        <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16' id='skill'>
            <h1 className='text-3xl lg:text-5xl font-bold mb-6 lg:text-left text-center'>My Skills</h1>
            <Card>
                <CardBody>
                    <div className="skills grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>React Js</p>
                                <p>75%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-3/4 top-0 h-3 rounded shim-blue bg-[#47B5FF]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>PHP</p>
                                <p>80%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-4/5 top-0 h-3 rounded shim-blue bg-[#5584AC]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Node Js</p>
                                <p>70%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-3/4 top-0 h-3 rounded shim-blue bg-[#21BF73]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Express Js</p>
                                <p>65%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-8/12 top-0 h-3 rounded shim-blue bg-[#262524]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Mongo DB</p>
                                <p>85%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-10/12 top-0 h-3 rounded shim-blue bg-[#4E9525]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>My SQL</p>
                                <p>90%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-11/12 top-0 h-3 rounded shim-blue bg-[#FF971D]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>WordPress</p>
                                <p>80%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-4/5 top-0 h-3 rounded shim-blue bg-[#1C658C]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Tailwind CSS</p>
                                <p>90%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-11/12 top-0 h-3 rounded shim-blue bg-[#0096FF]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Bootstrap</p>
                                <p>90%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-11/12 top-0 h-3 rounded shim-blue bg-[#A85CF9]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>PhotoShop</p>
                                <p>80%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-4/5 top-0 h-3 rounded shim-blue bg-[#170055]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Adobe XD</p>
                                <p>75%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-3/4 top-0 h-3 rounded shim-blue bg-[#440A67]"></div>
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Figma</p>
                                <p>60%</p>
                            </div>
                            <div className="relative w-full bg-gray-200 rounded">
                                <div  className="absolute w-3/4 top-0 h-3 rounded shim-blue bg-[#EB1D36]"></div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default MySkill;