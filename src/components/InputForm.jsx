import React from 'react'
import { useState } from 'react'

export const InputForm = ({ taskList, setTaskList }) => {
    // デフォルト値を設定
    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        // タスクの追加を行う
        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                compleated: false,
            }
        ]);
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText} />
                <button onClick="handleDelete">
                    <i className="fa-sharp fa-solid fa-plus"></i>
                </button>
            </form>
        </div>
    )
}
