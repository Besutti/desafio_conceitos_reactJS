import React, { useState, useEffect } from 'react';
import api from './services/api';

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect( () => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    // TODO
    
    const response = await api.post('repositories',{
      title : `Desafio ReactJS ${Date.now()}`,
	    url: "http://github.com/...",
	    techs: ["Node.js", "teste", "React"]
    });

    const repository = response.data;

    setRepositories([ ...repositories, repository]);
    //tenho que terminar por aqui
    //já poss testar o get
  }

  async function handleRemoveRepository(id) {
    // TODO
    
    await api.delete(`repositories/${id}`);

    // funcionou mas acho que não é correto
    // const repositoryIndex = repositories.findIndex(rep => rep.id === id);
    // repositories.splice(repositoryIndex,1);
    // setRepositories([...repositories]);

    // assim remonta o array com todos os itens diferente ao removido
    // e não interfere no conceito de imutabilidade!!!!
    setRepositories(repositories.filter(
      repository => repository.id !== id
    ))

    
    
    //aqui eu tenho que pensar em como remover o esquema
    //setRepositories([ ...repository, remove])
  }

  return (
    <div>
      <h1>Repositories</h1>
      <ul data-testid="repository-list">

        {repositories.map(repository => 
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}> Remover </button>
          </li>)}
        </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
  // return (
  //   <>
  //     <h1>Repositories</h1>
  //     <ul data-testid="repository-list">
        
  //     </ul>
  //     <button onClick={handleAddRepository}>Adicionar</button>

  //   </>
  // );
}

export default App;
