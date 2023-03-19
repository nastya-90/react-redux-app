import { taskDeleted, taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
    switch (action.type) {
        case taskUpdated: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            );
            console.log("elementIndex", elementIndex);
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload,
            };
            return newArray;
        }
        case taskDeleted: {
            const newArray = [...state];
            const updateArray = newArray.filter(
                (el) => el.id !== action.payload
            );
            return updateArray;
        }
        default:
            return state;
    }
}
