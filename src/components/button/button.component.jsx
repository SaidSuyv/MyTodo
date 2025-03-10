import './button.style.css'
import { motion } from 'framer-motion'

export function Icon({
  sIcon = "",
  onClick = () => null
})
{
  return (
    <motion.button
      className="button icon"
      onClick={ onClick }
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
    >
      <i className={["bi","bi-"+sIcon].join(" ")} />
    </motion.button>
  )
}
