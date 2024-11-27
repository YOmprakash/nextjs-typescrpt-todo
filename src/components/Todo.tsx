'use client';

import React, { useState } from 'react';

interface Todo = {
    id: number;
    todo: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<string>('');

    // Function to Add a todo
    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo.trim() === '') {
            return alert('Enter Todo')
        }

        const newTodo: Todo = {
            id: Date.now(),
            todo: todo,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setTodo('');
    };

    // Function to delete a todo
    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id); // Filter out the todo with the given id
        setTodos(updatedTodos);
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='font-bold text-white text-4xl mb-5'>Todos App</h1>


            <form onSubmit={onSubmitForm} className='mb-5 flex'>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='border border-solid px-4 rounded-md py-2 border-[#000000]'
                    type='text'
                    placeholder='Enter todo'
                />
                <button
                    className='bg-blue-500 px-8 py-2 rounded-md ml-4 text-gray-100 font-bold'
                    type='submit'
                >
                    Add
                </button>
            </form>


            <ul className='w-1/2 flex flex-col-reverse'>
                {todos.map((item) => (
                    <li
                        key={item.id}
                        className='flex 
                     justify-between items-center bg-gray-100 p-4 mb-2 rounded-md'
                    >
                        <span className='font-bold text-lg'>{item.todo}</span>
                        <button
                            onClick={() => deleteTodo(item.id)}
                            className='bg-red-500 px-4 py-2 rounded-md text-white'
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length === 0 && (
                <p className='text-gray-200 mt-4'>No todos added yet!</p>
            )}
        </div>
    );
};

export default TodoApp;
