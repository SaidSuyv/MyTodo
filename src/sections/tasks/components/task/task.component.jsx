import './task.style.css'
import * as Button from '../../../../components/button/button.component'

import { motion , AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Task({
  oData = {},
  nId = -1,
  onUpdate = () => null,
  onDeleteItem = () => null
})
{
  const handleCheck = () => onUpdate( nId , "done" , !oData.done )
  const toggleMenu = () => onUpdate( nId, "menu" , !oData.menu )
  const handleDelete = () => onDeleteItem( nId )

  return (
    <motion.div
      className="task"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 , transition: { delay: nId > 0 ? 0.2 * nId : 0 } }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Button.Icon sIcon={ oData.done ? "check-circle" : "circle" } onClick={ handleCheck }/>
      <span>{ oData.name }</span>
      <Button.Icon sIcon="chevron-right" onClick={ toggleMenu } />
      
      <AnimatePresence>
        {
          oData.menu &&
          <motion.div
            className="menu"
            initial={{ width: 0 , opacity: 0 }}
            animate={{ width: 'auto' , opacity: 1 }}
            exit={{ width: 0 , opacity: 0 }}
            layoutId={ "menu-" + nId }
          >
            <Button.Icon sIcon="trash" onClick={ handleDelete } /> 
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}
