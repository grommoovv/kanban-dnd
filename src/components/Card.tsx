import { DragEvent, FC } from 'react'
import { motion } from 'framer-motion'
import { DropIndicator } from './DropIndicator'
import { Task } from '../data'

interface CardProps {
  id: string
  title: string
  column: string
  handleDragStart: (e: DragEvent<HTMLDivElement>, card: Task) => void
}

export const Card: FC<CardProps> = ({ title, id, column, handleDragStart }) => {
  const handleDragStartWrapper = (e: DragEvent<HTMLDivElement>) => {
    handleDragStart(e, { title, id, column })
  }

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div layout layoutId={id}>
        <div
          draggable='true'
          onDragStart={handleDragStartWrapper}
          className='cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'
        >
          <p className='text-sm text-neutral-100'>{title}</p>
        </div>
      </motion.div>
    </>
  )
}
