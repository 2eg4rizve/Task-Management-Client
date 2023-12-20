import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const CreateNewTasks = () => {

    const { user } = useContext(AuthContext);

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;



        const title = form?.title?.value || "";
        const descriptions = form?.descriptions?.value || "";
        const deadlines = form?.deadlines?.value || "";
        const priority = form?.descriptions?.value || "";
        const store = "toDo";
        const userName = user?.displayName
        const userEmail = user?.email;

        // console.log("authorName : ", authorName);
        // console.log("levelName : ", levelName);

        const newTask = { title, descriptions, deadlines, priority, store, userName, userEmail }

        console.log("newTask : ", newTask);



        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'task add successfully',

                    })
                }
            })
    }
    return (
        <div className="">


            <div className="bg-[#EEEEEE] p-10 text-black">
                <p className="text-3xl font-bold text-center mb-[30px] "> Add Level Problem</p>

                <form onSubmit={handleAdd}>




                    {/*Title  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/*descriptions  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='descriptions' placeholder="Descriptions" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/* deadlines  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text"> Deadlines</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='deadlines' placeholder="Deadlines" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    {/*  priority  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='priority' placeholder="priority" className="input input-bordered w-full" required />
                        </label>
                    </div>

                    {/* store 
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='store' placeholder="priority" className="input input-bordered w-full" required />
                        </label>
                    </div> */}














                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>
            </div>




        </div>
    );
};

export default CreateNewTasks;