import {useRef} from "react";
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/reducer/todo/todo.js";


const TodoComponent = () => {
    const myTask = useRef();

    const dispatch = useDispatch();



    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <input ref={myTask} className="form-control" placeholder="Enter Task Name"/>
                </div>
                <div className="col-2">
                    <button onClick={()=>dispatch(AddTodo(myTask.current.value))} className="btn btn-info">Add</button>
                </div>

            </div>
        </div>
    );
};

export default TodoComponent;