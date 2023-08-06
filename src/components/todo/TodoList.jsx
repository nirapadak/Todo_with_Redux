import {useSelector} from "react-redux";
import {todoAlert} from "./todoAlert.js";
import {todoEditAlert} from "./todoEditAlert.js";


const TodoList = () => {

    const todoItem = useSelector((state)=>state.todo.value);


    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Check</th>
                            <th>No</th>
                            <th>Task name</th>
                            <th>Edite</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            todoItem.map((item,i)=>{
                                return(
                                    <tr key={i.toString()}>
                                        <th><a className="btn-check"></a></th>
                                    <td>{i}</td>
                                    <td>{item}</td>
                                    <td><button onClick={()=>{todoEditAlert(i,item)}} className="btn btn-success">Edit</button></td>
                                    <td><button onClick={()=>{todoAlert(i)}} className="btn btn-danger">Delete</button></td>
                                    </tr>

                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoList;