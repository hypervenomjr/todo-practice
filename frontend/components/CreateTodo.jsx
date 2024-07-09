import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div>
            <input style={{ margin: 10, padding: 10 }}
                type="text"
                placeholder="title"
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                } } /><br />
            <input style={{ margin: 10, padding: 10 }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            /><br />

            <button
                style={{ margin: 10, padding: 10 }}
                onClick={async () => {
                  const res = await fetch('http://localhost:4000/todo',{
                        method:"POST",
                        body: JSON.stringify({
                        title: title,
                        description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                        
                }}>Add a Todo</button>
        </div>
    )
}