import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Ruan", age: 19},
        {id: 2, name: "Fulano", age: 21},
        {id: 3, name: "Ciclano", age: 29},
    ]);

    const handleRandomUser = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={handleRandomUser}>Delete random user</button>
        </div>
    );
};

export default ListRender;