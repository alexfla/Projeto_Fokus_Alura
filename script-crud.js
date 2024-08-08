//encontrar botão 

const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdionarTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    formAdionarTarefa.classList.toggle('hidden')
})

formAdionarTarefa.addEventListener('submit',(evento) => {
    evento.preventDefault();
    const tarefa = { 
              descricao: textArea.value 
    }           
    tarefas.push(tarefa)
    localStorage.setItem('tarefas',tarefas)
})