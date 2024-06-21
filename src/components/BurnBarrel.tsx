import { DragEvent, FC, useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'
import { Task } from '../data'

interface BurnBarrelProps {
  setCards: React.Dispatch<React.SetStateAction<Task[]>>
}

export const BurnBarrel: FC<BurnBarrelProps> = ({ setCards }) => {
  const [active, setActive] = useState(false)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setActive(true)
  }

  const handleDragLeave = () => {
    setActive(false)
  }

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData('cardId')
    setCards((pv) => pv.filter((c) => c.id !== cardId))
    setActive(false)
  }

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`absolute right-5 bottom-5  p-5 h-max rounded border border-dashed text-3xl ${
        active
          ? 'border-red-800 bg-red-800/20 text-red-500'
          : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'
      }`}
    >
      {active ? <FaFire className='animate-bounce' /> : <FiTrash />}
    </div>
  )
}
