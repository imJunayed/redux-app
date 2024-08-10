import React, { useState } from 'react'
import notesImg from '../assets/images/notes.png'
import tickImg from '../assets/images/double-tick.png'
import plusImg from '../assets/images/plus.png'
import { useDispatch } from 'react-redux'
import { added, allCompleted, clearCompleted } from '../redux/todos/actions'

export default function Header() {
    const dispatch = useDispatch()

    const [todoText, setTodoText] = useState('');

    const completeAllHandler = () => {
        dispatch(allCompleted());
    }

    const clearCompletedHandler = () => {
        dispatch(clearCompleted())
    }

    const handleChange = (event) => {
        setTodoText(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(todoText)
        dispatch(added(todoText))
    }

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={submitHandler}
            >
                <img
                    src={notesImg}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    name='todoText'
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={completeAllHandler}>
                    <img
                        className="w-4 h-4"
                        src={tickImg}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={clearCompletedHandler}>Clear completed</li>
            </ul>
        </div>
    )
}
