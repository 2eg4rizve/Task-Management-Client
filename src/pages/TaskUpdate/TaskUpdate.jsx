/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import useTasks from "../../hooks/useTasks";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const TaskUpdate = () => {

    const { id } = useParams();

    const { user } = useContext(AuthContext);

    const [selectedItem, setSelectedItem] = useState('');
    const [selectedItem2, setSelectedItem2] = useState('');

2
    console.log("update id : ", id);

    const [refetch, tasks, isLoading] = useTasks();

    if (isLoading) {

        return <p>Loading.................</p>
    }

    const myTask = tasks.find(item => item._id == id);

    console.log("my Task : ", myTask);

    
   
    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
        console.log(event.target.value)
    }

    const handleSelectChange2 = (event) => {
        setSelectedItem2(event.target.value);
        console.log(event.target.value)
    }

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;



        const title = form?.title?.value || "";
        const descriptions = form?.descriptions?.value || "";
        const deadlines = form?.deadlines?.value || "";
        const priority = selectedItem || "";
        const store = selectedItem2 || "";
        const userName = user?.displayName;
        const userEmail = user?.email;

        // console.log("authorName : ", authorName);
        // console.log("levelName : ", levelName);

        const newTask = { title, descriptions, deadlines, priority, store, userName, userEmail }

        console.log("newTask : ", newTask);

        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log("update product data : ", data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Task Updated successfully',
                        confirmButtonText: 'cool'

                    })
                }
            })



    }


    return (
        <div>
            <p className="font-bold text-3xl text-center mb-[20px]">Update Task</p>

            <p>Update id : : {id}</p>

            <form onSubmit={handleUpdate}>




                {/*Title  */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='title'  defaultValue={myTask?.title}  placeholder="Title" className="input input-bordered w-full " required />
                    </label>
                </div>


                {/*descriptions  */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Descriptions</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='descriptions' defaultValue={myTask?.descriptions} placeholder="Descriptions" className="input input-bordered w-full" required />
                    </label>
                </div>



                {/* deadlines  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Deadlines</span>
                    </label>
                    <input type="date" name="deadlines"  defaultValue={myTask?.deadlines}  className="input input-bordered" required />

                </div>





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


                 {/*  store  */}
                 <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Store </span>
                    </label>
                    <div>
                        <select
                            onChange={handleSelectChange2}
                            value={selectedItem2}
                            required
                            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="">Select store</option>
                            <option value="toDo">toDo</option>
                            <option value="ongoing">ongoing</option>
                            <option value="complete">complete</option>



                        </select>

                    </div>

                </div>

             













                <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


            </form>



        </div>
    );
};

export default TaskUpdate;