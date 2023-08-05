import {configureStore} from "@reduxjs/toolkit";
import createTodo from "../reducer/todo/todo.js";

export default configureStore({
    reducer:{
        todo:createTodo,
    }
})