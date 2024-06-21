import { FC, useState } from 'react'
import { BurnBarrel } from './BurnBarrel'
import { Column } from './Column'
import { Task, BOARDS } from '../data'

export const Kanban: FC = () => {
  const [cards, setCards] = useState<Task[]>(() => {
    return BOARDS.reduce<Task[]>((acc, board) => {
      return acc.concat(board.items)
    }, [])
  })

  return (
    <div className='relative flex justify-center h-full w-full gap-5 p-12'>
      {BOARDS.map((board) => (
        <Column
          title={board.title}
          column={board.board}
          titleColor={board.titleColor}
          cards={cards}
          setCards={setCards}
        />
      ))}

      <BurnBarrel setCards={setCards} />
    </div>
  )
}
