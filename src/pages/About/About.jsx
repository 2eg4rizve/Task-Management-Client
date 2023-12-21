/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <div className="p-[20px]  font-bold">
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">About </p>

            <div className="space-y-4 text-center px-[50px]">
                <p>
                    Welcome to our collaborative Task Management Platform powered by React.js! We've crafted an intuitive and responsive interface to streamline your task management experience. From a sleek landing page to a dynamic task dashboard, we prioritize user-friendly design across devices.
                </p>

                <p>
                    Our platform caters to a diverse user base, benefitting professionals like developers, corporate executives, bankers, and more. The dashboard empowers users to effortlessly create, organize, and track tasks with drag-and-drop functionality, ensuring seamless workflow management.
                </p>

                <p>
                    With features like task prioritization, real-time task movement across to-do, ongoing, and completed lists, and a secure login system, our platform is tailored for efficiency. Explore additional perks like toast notifications for task updates and deadlines, and optional animations for a visually engaging experience.

                </p>

                <p>we've incorporated task editing functionality, allowing users to easily modify and save task details. Experience the future of task management – join us on this journey!</p>
            </div>
        </div>
    );
};

export default About;