import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorChanged, statusChanged } from '../redux/filter/actions';

export default function Footer() {

    const filters = useSelector((state) => state.filters)
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const remaimingTodos = todos.filter((todo) => !todo.completed).length

    const updateStatus = (status) => {
        dispatch(statusChanged(status))
    }

    const colorsFilterHandler = (color) => {
        if (colors.includes(color)) {
            dispatch(colorChanged(color, "removed"));
        } else {
            dispatch(colorChanged(color, "added"));
        }
    }

    const { status, colors } = filters;

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{remaimingTodos} tasks left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => updateStatus('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => updateStatus('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => updateStatus('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={() => colorsFilterHandler('green')}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                ></li>
                <li onClick={() => colorsFilterHandler('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li onClick={() => colorsFilterHandler('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}
