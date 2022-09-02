import { Todo } from "../models/Todo";
import { ActionParent } from "../actions/todo.actions";
import { TodoActionType } from "../shared/enum/todo-action-types.enum";

const initialState: Todo[] = [
    {title: "Title Demo 1"},
    {title: "Title Demo 2"},
    {title: "Title Demo 3"}

];

export function TodoReducer(state = initialState, action: ActionParent){
    switch(action.type){
        default:
            return state;
    }
}