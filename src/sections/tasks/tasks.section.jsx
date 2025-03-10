import './tasks.style.css'
import Task from './components/task/task.component'
import { AnimatePresence } from 'framer-motion'

export default function Tasks_Section({
  aTasks = [] ,
  onUpdateTask = () => null ,
  onDeleteTask = () => null
})
{
  return (
    <section id="tasks">
      <AnimatePresence>
      {
        aTasks.map(
          ( e , i ) =>
            <Task
              key={ i }
              oData={ e }
              nId={ i }
              onUpdate={ onUpdateTask }
              onDeleteItem={ onDeleteTask }
            />
        )
      }
      </AnimatePresence>
    </section>
  )
}
