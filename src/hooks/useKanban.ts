import { useContext } from 'react'
import { KanbanContext } from '../context/kanban'

export const useKanban = () => useContext(KanbanContext)
