/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTasks from "../../hooks/useTasks";
import Swal from "sweetalert2";


const ToDoList = () => {
    const { user } = useContext(AuthContext);

    const [refetch, tasks, isLoading] = useTasks();

    if (isLoading) {

        return <p>Loading.................</p>
    }

    const myTasks = tasks.filter(item => item.userEmail == user.email && item.store == "toDo");

    console.log("myTasks : ", myTasks);

    const handleDelete = (id, title, descriptions, deadlines, priority, store, userName, userEmail) => {
        console.log("delete id : ", id);

        store = "ongoing"

        const newTask = { title, descriptions, deadlines, priority, store, userName, userEmail };


        Swal.fire({
            title: "Are you sure?",
            text: "You want to  add this in ongoing list",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                refetch();
                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newTask),
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                       
                            Swal.fire({
                                title: "Deleted!",
                                text: "Add in ongoing list",
                                icon: "success"
                            });
                        
                    })
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Add in ongoing list",
                        icon: "success"
                    });

            }
        });
    }

    return (
        <div>
            <p className="font-bold text-3xl text-center mb-[20px]">My To Do List</p>

            <p className="mb-[20px]">Total : {myTasks.length}</p>

            {
                myTasks.map(item => <div key={item._id} className="border-2 mt-[10px] p-[10px]">

                    <p>Title : {item.title}</p>
                    <p>Descriptions : {item.descriptions}</p>
                    <p>deadlines : {item.deadlines}</p>
                    <p>priority : {item.priority}</p>
                    <p>store : {item.store}</p>


                    <button
                        onClick={() => handleDelete(item._id, item.title, item.descriptions, item.deadlines, item.priority, item.store, item.userName, item.userEmail)}
                        className="btn btn-sm my-[20px] btn-primary"

                    >

                        Mark As OnGoing

                    </button>



                </div>)
            }

        </div>
    );
};

export default ToDoList;