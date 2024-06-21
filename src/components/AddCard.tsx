import { FiPlus } from 'react-icons/fi'
import { FC, FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Task } from '../data'

interface AddCardProps {
  column: string
  setCards: React.Dispatch<React.SetStateAction<Task[]>>
}

export const AddCard: FC<AddCardProps> = ({ column, setCards }) => {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text.trim().length) return

    const newCard: Task = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    }

    setCards((pv) => [...pv, newCard])
    setAdding(false)
  }

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder='Add new task...'
            className='w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0'
          />
          <div className='mt-1.5 flex items-center justify-end gap-1.5'>
            <button
              onClick={() => setAdding(false)}
              className='px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50'
            >
              Close
            </button>
            <button
              type='submit'
              className='flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300'
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className='flex w-full items-center justify-center gap-2 px-3 py-3  text-sm border border-dashed border-neutral-700 rounded-md text-neutral-400 transition-colors hover:text-neutral-50'
        >
          <span className='leading-none'>New task</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  )
}
