import TodoComponent from "../components/todo/TodoComponent.jsx";
import TodoList from "../components/todo/TodoList.jsx";


const Todo = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center font-monospace">TO-Do Application</h1>
                        </div>
                        <div className="card-body">
                            <TodoComponent/>
                            <TodoList/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Todo;