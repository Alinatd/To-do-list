let section = document.createElement('section') 
section.className= 'section';
document.body.prepend(section)


let main = document.createElement('main')
main.className = 'container'

document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className ="mainblock"
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let texIn = document.createElement('input')
texIn.className = 'texIn'
texIn.setAttribute('placeholder','Gonna do...')
firstDiv.append(texIn)

let setDate = document.createElement('input')
setDate.setAttribute('type','date')
firstDiv.append(setDate)

let addBtn = document.createElement('button')
addBtn.innerHTML = 'ADD'
addBtn.id = 'AddBtn'
firstDiv.append(addBtn)


let list = document.createElement('ul')
listBlock.append(list)

let todosArray= localStorage.getItem('todos')== null?
[]

: [...JSON.parse(localStorage.getItem('todos'))]



const addTodo = ()=>{
    let newTask = texIn.value
    let date = setDate.value

    if(newTask != ''){
todosArray.push({
    text: newTask,
checked:false,
date
})
localStorage.setItem('todos',JSON.stringify(todosArray))

texIn.value =''
setDate.value=''
renderTodoItem()
    }
    
    
}

const completeTodo = (e)=>{
//    console.log(e.target.parentNode)

let todoTemporary = [...todosArray]
let index = e.target.parentNode.id

let objectElement = todoTemporary[index].checked

todoTemporary[index].checked = !objectElement
localStorage.setItem('todo',JSON.stringify(todosArray))


console.log(objectElement)

let isDone = e.target.parentNode.classList.contains('done')

isDone 
?
e.target.parentNode.classList.remove('done'):
e.target.parentNode.classList.add('done')

// e.target.parentNode.classList.toggle('done')
}
const removeTodo = (e) =>{
    // console.log(e.target.parentNode)
    // e.target.parentNode.remove(e.parentNode) - local str жок ремувду басканда очуусун кааласак кылса болот
    let index = e.target.parentNode.id
    todosArray.splice(index,1)

    localStorage.setItem('todos',JSON.stringify(todosArray))
    renderTodoItem()
}
// renderTodoItem()
addBtn.addEventListener('click',addTodo)

const renderTodoItem = ()=>{

    list.innerHTML = ''
    todosArray.map((todo,id)=>{

        let li = document.createElement('li')
        li.className =todo.checked ?'taskItem done':"taskItem"
        li.id = id 

        let doneBtn = document.createElement('img')
        doneBtn.src="done1.png"
        doneBtn.className ='btn'
        doneBtn.addEventListener('click',completeTodo)
    
        let deleteBtn = document.createElement('img')
        deleteBtn.src="trash.png"
        deleteBtn.className ='btn'
    deleteBtn.addEventListener('click',removeTodo)
    
        
        let label = document.createElement('label')
        label.append(todo.text+" - "+todo.date)
        li.append(label)
        li.append(doneBtn)
        li.append(deleteBtn)
    // li.append(newTask)
    // li.append(date)
        list.append(li)
    })
    }
renderTodoItem()    