import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const CreateNewTasks = () => {

    const { user } = useContext(AuthContext);

    const [selectedItem, setSelectedItem] = useState('');

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
        console.log(event.target.value)
    }

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;



        const title = form?.title?.value || "";
        const descriptions = form?.descriptions?.value || "";
        const deadlines = form?.deadlines?.value || "";
        const priority = selectedItem || "";
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
                <p className="text-3xl font-bold text-center mb-[30px] "> Add Task</p>

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
                    {/* <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text"> Deadlines</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='deadlines' placeholder="Deadlines" className="input input-bordered w-full" required />
                        </label>
                    </div> */}


                    {/* deadlines  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Deadlines</span>
                        </label>
                        <input type="date" name="deadlines" className="input input-bordered" required />

                    </div>



                    {/* priority 
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='priority' placeholder="priority" className="input input-bordered w-full" required />
                        </label>
                    </div> */}

                    
                    {/*  priority  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Priority </span>
                        </label>
                        <div>
                            <select
                                onChange={handleSelectChange}
                                value={selectedItem}
                                required
                                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="">Select priority  </option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>



                            </select>

                        </div>

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