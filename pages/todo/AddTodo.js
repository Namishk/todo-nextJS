import { useState } from "react";


export default function AddTodo() {

    const [task, setTask] = useState('');
    const [category, setCategory] =  useState('');

    const addTask = () => {
        const data = {
            "task" : task.toString(),
            "category" : category.toString(),
        }


        console.log(data);
    }
    return(
        <form onSubmit = {e => e.preventDefault()}>
            <label>Task : &nbsp; <input type='text' placeholder="Enter Task"
                value={task}
                onChange={e=> setTask(e.target.value)}
            /> </label>
            <label>Category : &nbsp; 
                    <select onChange={e=> setCategory(e.target.value)} defaultValue="less Important" >
                        <option value="Important">Important</option>
                        <option value="less Important">Less Important</option>
                        <option value="Can do Later">Can do Later</option>
                    </select>
                </label>
            <button onClick={addTask}>Add</button>
        </form>
    );
}