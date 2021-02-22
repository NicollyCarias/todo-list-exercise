async function fetchData() {
  const response = await fetch('https://602a681d6c995100176ee4c4.mockapi.io/todos')
  const data = await response.json();

  function removerOPadrao() {
    const filho1 = document.getElementById('1');
    const filho2 = document.getElementById('2');
    const filho3 = document.getElementById('3');
    const filho4 = document.getElementById('4');
    const filho5 = document.getElementById('5');
    filho1.parentNode.removeChild(filho1);
    filho2.parentNode.removeChild(filho2);
    filho3.parentNode.removeChild(filho3);
    filho4.parentNode.removeChild(filho4);
    filho5.parentNode.removeChild(filho5);
  }
  removerOPadrao();

  function crescente(array) {
    for(let i = 0; i < array.length; i += 1) {
      for(let j = 0; j < array.length - 1; j+=1){
        let swap = [];
        if(array[j].priority > array[j+1].priority) {
          swap = array[j];
          array[j] = array[j+1]
          array[j+1] = swap;
        };
      }
    }
    return array;
  };

  crescente(data);

  function ordenarData(array) {
    for(let i = 0; i < array.length; i += 1) {
      for(let j = 0; j < array.length - 1; j+=1){
        let swap = [];
        if(array[j].due_date > array[j+1].due_date && array[j].priority === array[j+1].priority) {
          swap = array[j];
          array[j] = array[j+1]
          array[j+1] = swap;
        };
      };
    };
    return array;
  };

  ordenarData(data);

  function listarTasks(data) {
    for (let i = 0; i < data.length; i += 1) {
      const parent = document.querySelector('#list');
      if(data[i].priority === 1) {
        const list = document.createElement('li');
        list.className = 'list-group-item bg-danger';
        const h3 = document.createElement('h3');
        h3.className = 'text-right';
        const string = data[i].due_date;
        const converterParaDate = new Date(string).toLocaleDateString('pt-BR');
        h3.innerText = converterParaDate;
        const pT = document.createElement('p');
        pT.id = 'tasks';
        pT.innerText = data[i].task_name;
        const pP = document.createElement('p');
        pP.id = 'prioridade';
        pP.innerHTML = `Prioridade: ${data[i].priority}`;
        list.appendChild(h3);
        list.appendChild(pT);
        list.appendChild(pP);
        parent.appendChild(list);
      } else if (data[i].priority === 2) {
        const list = document.createElement('li');
        list.className = 'list-group-item bg-warning';
        const h3 = document.createElement('h3');
        h3.className = 'text-right';
        const string = data[i].due_date;
        const converterParaDate = new Date(string).toLocaleDateString('pt-BR');
        h3.innerText = converterParaDate;
        const pT = document.createElement('p');
        pT.id = 'tasks2';
        pT.innerText = data[i].task_name;
        const pP = document.createElement('p');
        pP.id = 'prioridade2';
        pP.innerHTML = `Prioridade: ${data[i].priority}`;
        list.appendChild(h3);
        list.appendChild(pT);
        list.appendChild(pP);
        parent.appendChild(list);
      } else if (data[i].priority === 3) {
        const list = document.createElement('li');
        list.className = 'list-group-item bg-info';
        const h3 = document.createElement('h3');
        h3.className = 'text-right';
        const string = data[i].due_date;
        const converterParaDate = new Date(string).toLocaleDateString('pt-BR');
        h3.innerText = converterParaDate;
        const pT = document.createElement('p');
        pT.id = 'tasks3';
        pT.innerText = data[i].task_name;
        const pP = document.createElement('p');
        pP.id = 'prioridade3';
        pP.innerHTML = `Prioridade: ${data[i].priority}`;
        list.appendChild(h3);
        list.appendChild(pT);
        list.appendChild(pP);
        parent.appendChild(list);
      } else if (data[i].priority === 4) {
        const list = document.createElement('li');
        list.className = 'list-group-item bg-success';
        const h3 = document.createElement('h3');
        h3.className = 'text-right';
        const string = data[i].due_date;
        const converterParaDate = new Date(string).toLocaleDateString('pt-BR');
        h3.innerText = converterParaDate;
        const pT = document.createElement('p');
        pT.id = 'tasks4';
        pT.innerText = data[i].task_name;
        const pP = document.createElement('p');
        pP.id = 'prioridade4';
        pP.innerHTML = `Prioridade: ${data[i].priority}`;
        list.appendChild(h3);
        list.appendChild(pT);
        list.appendChild(pP);
        parent.appendChild(list);
      } else {
        const list = document.createElement('li');
        list.className = 'list-group-item bg-secondary';
        const h3 = document.createElement('h3');
        h3.className = 'text-right';
        const string = data[i].due_date;
        const converterParaDate = new Date(string).toLocaleDateString('pt-BR');
        h3.innerText = converterParaDate;
        const pT = document.createElement('p');
        pT.id = 'tasks5';
        pT.innerText = data[i].task_name;
        const pP = document.createElement('p');
        pP.id = 'prioridade5';
        pP.innerHTML = `Prioridade: ${data[i].priority}`;
        list.appendChild(h3);
        list.appendChild(pT);
        list.appendChild(pP);
        parent.appendChild(list);
      }
    }
  }

  listarTasks(data);

  // function formatarData(data) {
  //   for(let i = 0; i < data.length; i += 1) {
  //     // let dataFormatada = date[i].due_date.substr(0, 10).split('-');
  //     // let dataRevertida = dataFormatada.reverse().join('/');
  //     return dataRevertida;
  //   }
  // };
};

fetchData();
