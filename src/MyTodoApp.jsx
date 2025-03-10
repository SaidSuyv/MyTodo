import HeaderComponent from './sections/header/header.section'
import AddSection from './sections/add/add.section'
import TasksSection from './sections/tasks/tasks.section'

import { useState , useEffect } from 'react'

export default function MyTodoApp()
{
  const [ aTasks , setTasks ] = useState([])

  const getStoredTasks = () => {
    const local = localStorage.getItem("mytodoapp")
    console.log("local",local)
    const parse = JSON.parse( local )

    if( parse == null )
      return []
    
    return parse
  }

  useEffect(
    () => {
      if( aTasks.length == 0 ) return
      localStorage.setItem("mytodoapp",JSON.stringify(aTasks))
    },
    [ aTasks ]
  )

  useEffect(
    () => {
      return () => setTasks( getStoredTasks() )
    },
    []
  )

  const handleCreateTask = name => {
    const task = {
      done: false,
      archive: false,
      menu: false,
      name
    }
    setTasks([ ...aTasks , task ])
  }

  const handleDeleteTask = ind => {
    setTasks( aTasks.filter( (e , i) => i != ind ) )
  }

  const handleTaskUpdate = ( i , p , v ) => {
    setTasks(
      aTasks.map( ( el , ind ) => {
        if( i == ind )
          el[p] = v
        
        return el
      })
    )
  }

  return (
    <>
      <HeaderComponent />
      <main>
        <AddSection onCreateTask={ handleCreateTask } />
        <hr/>
        <TasksSection
          aTasks={ aTasks }
          onUpdateTask={ handleTaskUpdate }
          onDeleteTask={ handleDeleteTask }
        />
      </main>
    </>
  )
}
