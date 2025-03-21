import { useState } from "react";

const MyForm = ({user}) => {
  // 6 - controlled inputs

  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleName = (e) => {
    console.log(e.target.value);
  };

  // console.log(email);
  // console.log(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending form...");
    console.log(name, email);

    // 7 - limpar formulário
    setEmail('')
    setName('')
  };
  
  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - form creation */}
        <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              {/* <input type="text" name="name" placeholder="Write your name" onChange={handleName}/> */}
              <input
                type="text"
                name="name"
                placeholder="Write your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
              <span>E-mail</span>
              {/* Simplificação de manipulação de state */}
              <input
                type="email"
                name="email"
                placeholder="Write your e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <input type="submit" value="Send" />
        </form>
    </div>
  );
};

export default MyForm;