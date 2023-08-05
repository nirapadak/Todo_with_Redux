import Swal from "sweetalert2";
import store from "../../redux/store/store.js";
import {RemoveTodo} from "../../redux/reducer/todo/todo.js";

export function todoAlert(i){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(RemoveTodo(i))
        }
    })
}