import React, { useState, useEffect } from 'react';
import { firebase } from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [todoDesc, setTodoDesc] = useState("")
  const [todoPriori, setTodoPriori] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [todoId, setTodoId] = useState("")

  useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('todos').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setTodos(arrayData)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  const add = async (e) => {
    e.preventDefault()
    if (!todo.trim()) {
      return
    }

    try {
      const db = firebase.firestore()
      const data = await db.collection('todos').add({
        name: todo,
        description: todoDesc,
        priority: todoPriori
      })

      const todoNew = {
        name: todo,
        description: todoDesc,
        priority: todoPriori
      }

      setTodos([
        ...todos,
        { id: data.id, ...todoNew }
      ])

      setTodo("")
      setTodoDesc("")
      setTodoPriori(false)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection('todos').doc(id).delete()

      const todosFilter = todos.filter(item => item.id !== id)
      setTodos(todosFilter)
    } catch (error) {
      console.error(error)
    }
  }

  const edit = async (e) => {
    e.preventDefault()
    if (!todo.trim()) {
      return
    }

    try {
      const db = firebase.firestore()
      await db.collection('todos').doc(todoId).update({
        name: todo,
        description: todoDesc,
        priority: todoPriori
      })

      const arrayEdit = todos.map(item => (
        item.id === todoId ? { id: item.id, name: todo } : item
      ))
      setTodos(arrayEdit)
      setTodo("")
      setTodoId("")
      setEditMode(false)
      setTodoPriori(false)
      setTodoDesc("")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <h1 className="text-center shadow-lg p-1 mb-2 rounded" >Wellcome to the todo manager.</h1>
      <form onSubmit={editMode ? edit : add} >
        <input type="text"
          placeholder="Add todo name"
          className="form-control mb-2 shadow-lg p-3 bg-white rounded"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input type="text"
          placeholder="Add todo description"
          className="form-control mb-2 shadow-lg p-3 bg-white rounded"
          value={todoDesc}
          onChange={e => setTodoDesc(e.target.value)}
        />
        <div className="radio input-group-prepend">
          <label class="bg-white text-center shadow-lg p-1 mb-2 rounded">Is urgent?</label>
          <input type="radio"
            
            checked={todoPriori}
            className="form-control mb-2"
            value={todoPriori}
            onChange={e => setTodoPriori(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-outline-dark btn-block mb-5 shadow p-3 shadow-lg rounded">
          {editMode ? "Edit" : "Add"}
        </button>
      </form>
      <ul className="list-group">
        {
          todos.map(item => (
            <li className="list-group-item" key={item.id}>
              <img src="/penguin.png" class="rounded float-left" width="5%" ></img>
              <span>
                <label class="font-weight-bold ml-3">Name: {item.name}</label><br/>
                <label class="text-info ml-3">Description: {item.description}</label><br/>
                  {item.priority ? <label class="text-danger">Is urgent</label> : <label class="text-success">It's not urgent</label>}
              </span>
              <button className="btn btn-sm btn-danger float-right" onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
              <button className="btn btn-sm btn btn-info float-right mr-2" onClick={
                () => {
                  setTodo(item.name);
                  setTodoId(item.id);
                  setEditMode(true);
                  setTodoDesc(item.description);
                  setTodoPriori(item.priority)
                }
              }>Edit</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
