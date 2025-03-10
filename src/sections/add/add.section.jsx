import './add.style.css'
import * as Input from "../../components/input/input.component"
import * as Button from "../../components/button/button.component"

import { useState } from 'react'

export default function Add_Section({
  onCreateTask = () => null
})
{
  const [ sName , setName ] = useState("")
  const handleNameChange = n => setName(n)

  const handleCreate = () => {
    if( !sName ) return
    onCreateTask( sName )
    setName( "" )
  }

  return (
    <section id="add">
      <Input.Text
        sPlaceholder="Write your task"
        sValue={ sName }
        onChange={ handleNameChange }
      />
      <Button.Icon sIcon="plus-lg" onClick={ handleCreate }/>
    </section>
  )
}
