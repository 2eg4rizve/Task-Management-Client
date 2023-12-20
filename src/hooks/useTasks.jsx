import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTasks = () => {
    const {refetch , data: tasks =[] , isLoading} =useQuery({

        queryKey: ['level'],
        queryFn: async () =>{
          const res = await axios.get('http://localhost:5000/tasks')
          return res.data;
        }
  
     })
  
     return [refetch,tasks,isLoading];
   
};

export default useTasks;