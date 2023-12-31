/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTasks from "../../hooks/useTasks";

const SeePreviousTasks = () => {

    const { user } = useContext(AuthContext);

    const [refetch, tasks, isLoading] = useTasks();

    if (isLoading) {

        return <p>Loading.................</p>
    }

    const myTasks = tasks.filter(item => item.userEmail == user.email );

    //console.log("myTasks : ", myTasks);

   

    const handleDelete2 = id => {
        console.log("delete id : ", id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
        <p className="font-bold text-3xl text-center mb-[20px]">My Previous Tasks List</p>

        <p className="mb-[20px]">Total : {myTasks.length}</p>

        {
            myTasks.map(item => <div key={item._id} className="border-2 mt-[10px] p-[10px]">

                <p>Title : {item.title}</p>
                <p>Descriptions : {item.descriptions}</p>
                <p>Deadlines : {item.deadlines}</p>
                <p>Priority : {item.priority}</p>
                <p>Type : {item.store}</p>


               

                <p></p>

                <button
                    onClick={() => handleDelete2(item._id)}
                    className="btn btn-sm my-[10px] btn-primary"

                >

                    Delete Task

                </button>

                <p></p>

                <Link to={`/taskManagement/taskUpdate/${item._id}`}>
                    <button className="btn btn-sm my-[10px] btn-primary">Update Task</button>
                </Link>



            </div>)
        }

    </div>
    );
};

export default SeePreviousTasks;