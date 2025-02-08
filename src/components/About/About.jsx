import React from 'react'


export default function About() {
    return (
        <div className="py-16 bg-lightblue">
            <div className="container m-auto px-6 text-black-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className='w-120 h-120 rounded'
                            src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764521_640.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-black-600">
                        Programming is the process of creating instructions, known as code, that a computer can follow to perform specific tasks, essentially acting as a language to communicate with machines; it involves designing algorithms, breaking down complex problems into smaller, executable steps, and writing code in a chosen programming language like Python, Java, or C++ to implement those algorithms, allowing for the development of software applications, websites, and even embedded systems; a key aspect is debugging, where programmers identify and fix errors in their code to ensure the program functions correctly; with its diverse applications across industries, programming empowers individuals to automate repetitive tasks, analyze data, and build innovative solutions, making it a vital skill in the modern technological landscape. 
                        </p>
                        <p className="mt-4 text-black-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
