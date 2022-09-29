import React from 'react';
import {
    Card,
    CardBody,
    Progress
} from "@material-tailwind/react";

const MySkill = () => {
    const skillData = [
        {
            skillName: "React Js",
            skillRate: "80%",
            color: "bg-[#47B5FF]",
            width: "w-3/4"
        },
        {
            skillName: "PHP",
            skillRate: "80%",
            color: "bg-[#5584AC]",
            width: "w-4/5"
        },
        {
            skillName: "Node Js",
            skillRate: "70%",
            color: "bg-[#21BF73]",
            width: "w-3/4"
        },
        {
            skillName: "Express Js",
            skillRate: "65%",
            color: "bg-[#262524]",
            width: "w-8/12"
        },
        {
            skillName: "Mongo DB",
            skillRate: "85%",
            color: "bg-[#4E9525]",
            width: "w-10/12"
        },
        {
            skillName: "My SQL",
            skillRate: "90%",
            color: "bg-[#FF971D]",
            width: "w-11/12"
        },
        {
            skillName: "WordPress",
            skillRate: "80%",
            color: "bg-[#1C658C]",
            width: "w-4/5"
        },
        {
            skillName: "Tailwind CSS",
            skillRate: "90%",
            color: "bg-[#0096FF]",
            width: "w-11/12"
        },
        {
            skillName: "Bootstrap",
            skillRate: "90%",
            color: "bg-[#A85CF9]",
            width: "w-11/12"
        },
        {
            skillName: "PhotoShop",
            skillRate: "80%",
            color: "bg-[#170055]",
            width: "w-4/5"
        },
        {
            skillName: "Adobe XD",
            skillRate: "75%",
            color: "bg-[#440A67]",
            width: "w-3/4"
        },
        {
            skillName: "Figma",
            skillRate: "60%",
            color: "bg-[#EB1D36]",
            width: "w-3/4"
        },
    ]
    return (
        <div className='container max-w-screen-xl mx-auto lg:py-24 md:py-16 py-16' id='skill'>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6 lg:text-left text-center dark:text-white'>My Skills</h1>
            <Card className='bg-white dark:bg-[#1F1F1F]'>
                <CardBody>
                    <div className="skills grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
                        {
                            skillData.map(data => <div className="skill__main lg:my-2 md:my-2 sm:my-1">
                                <div className="skill__detail flex justify-between">
                                    <p className=" dark:text-gray-400">{data.skillName}</p>
                                    <p className=" dark:text-gray-400">{data.skillRate}</p>
                                </div>
                                <div className="relative w-full bg-gray-200 rounded">
                                    <div className={`absolute ${data.width} top-0 h-3 rounded shim-blue ${data.color}`}></div>
                                </div>
                            </div>)
                        }
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default MySkill;