import React from 'react';
import {
    Card,
    CardBody,
    Progress
} from "@material-tailwind/react";

const MySkill = () => {
    return (
        <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 sm:py-16'>
            <h1 className='text-5xl font-bold mb-6'>My Skills</h1>
            <Card>
                <CardBody>
                    <div className="skills grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>React Js</p>
                                <p>75%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>PHP</p>
                                <p>80%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Node Js</p>
                                <p>70%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Node Js</p>
                                <p>65%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Mongo DB</p>
                                <p>85%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>My SQL</p>
                                <p>85%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>WordPress</p>
                                <p>80%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Tailwind CSS</p>
                                <p>90%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Bootstrap</p>
                                <p>90%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>PhotoShop</p>
                                <p>80%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Adobe XD</p>
                                <p>75%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                        <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                            <div className="skill__detail flex justify-between">
                                <p>Figma</p>
                                <p>60%</p>
                            </div>
                            <div className="progress__bar">
                                <Progress value={70} color="blue" />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default MySkill;