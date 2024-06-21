import { FC, PropsWithChildren, createContext } from 'react'

export const KanbanContext = createContext({})

const KanbanContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = {}

  return <KanbanContext.Provider value={value}>{children}</KanbanContext.Provider>
}

export { KanbanContextProvider }
