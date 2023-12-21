/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";


import { ScrollRestoration } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const BuiltFor = () => {
    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div className="pb-[10px]" data-aos="fade-up" >
            <ScrollRestoration />


            <p className="text-5xl font-bold text-center my-[60px] pt-[40px]">Built For</p>

            <div className="space-y-5 font-semibold  px-[35px] mb-[150px]">
                <li>
                    Developers on the Go: Streamline your coding projects with seamless task management, allowing developers to organize and prioritize their work effortlessly.
                </li>
                <li>
                    Corporate Efficiency Enthusiasts: Ideal for corporate professionals seeking enhanced task coordination, ensuring projects are on track and deadlines are met with precision.
                </li>

                <li>
                    Banking Sector Maestros: Tailored for bankers to efficiently manage their daily tasks, track ongoing projects, and ensure a systematic approach to financial responsibilities.
                </li>

                <li>
                    Entrepreneurial Visionaries: Entrepreneurs can leverage the platform to manage their ventures effectively, from conceptualizing ideas to executing tasks with strategic prioritization.
                </li>

                <li>
                    Freelancers' Task Haven: Provide freelancers with a dedicated space to manage their diverse tasks, fostering productivity and organization in their independent work.
                </li>

                <li>
                    Academic Taskmasters: Students and researchers benefit from a structured approach to task management, aiding in the organization of assignments, research projects, and study tasks.
                </li>

                <li>
                    Tech Enthusiasts and Innovators: The platform caters to individuals passionate about technology, offering a dynamic and user-friendly space for task collaboration and innovation.
                </li>

                <li>
                    Professional Multitasks: Designed for individuals juggling multiple responsibilities, ensuring an organized and efficient approach to handling diverse tasks.
                </li>

                <li>
                    Project Managers: Empower project managers to oversee tasks, allocate resources, and maintain a clear overview of project progress through the drag-and-drop functionality.
                </li>

                <li>
                    Task-Oriented Individuals: Anyone seeking a robust task management solution, whether for personal projects or professional endeavors, can find value in the platform's user-friendly features.
                </li>




            </div>
        </div>
    );
};

export default BuiltFor;