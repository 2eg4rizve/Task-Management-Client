/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";


import { ScrollRestoration } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Specialty = () => {

    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div className="pb-[10px]" data-aos="fade-up" >
            <ScrollRestoration />


            <p className="text-5xl font-bold text-center my-[60px] pt-[40px]">Specialty</p>

            <div className="space-y-5 font-semibold  px-[35px] mb-[150px]">
                <li>
                    Responsive Design: Seamlessly experience our platform on any device - phone, tablet, or PC - with a design that adapts to your screen size.
                </li>
                <li>
                    Intuitive Navigation: A simple navbar with clickable routes ensures easy exploration, while a captivating banner sets the tone for your task management journey.
                </li>

                <li>
                    User-Centric Dashboard: From developers to bankers, our platform caters to diverse professionals, offering a personalized dashboard displaying individual task details and profiles with profile pictures.
                </li>

                <li>
                    Drag-and-Drop Functionality: Effortlessly organize tasks across to-do, ongoing, and completed lists with an intuitive drag-and-drop feature, enhancing task management efficiency.
                </li>

                <li>
                    Secure User Authentication: Enjoy a secure login system, including Google sign-in, allowing exclusive access to the task management dashboard for a personalized experience.
                </li>

                <li>
                    Task Creation with React Hook Form: Utilize the efficiency of React Hook Form for seamless and structured task creation, including titles, descriptions, deadlines, and priority levels.
                </li>

                <li>
                    Dynamic Task Lists: Instantly see newly added tasks in the to-do list, and smoothly transition tasks between lists with real-time updates, ensuring a dynamic and organized workflow.
                </li>

                <li>
                    Notifications for Updates: Stay informed with toast notifications for task assignments, updates, and deadlines, keeping you in the loop with your task management activities.
                </li>

                <li>
                    Interactive Animations (Optional): Elevate your experience with optional animations using libraries like Framer Motion or Spring.js, adding a visually engaging touch to the platform.
                </li>




            </div>
        </div>
    );
};

export default Specialty;