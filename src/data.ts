export interface Task {
  id: string
  title: string
  column: string
}

export interface Board {
  id: number
  board: string
  title: string
  titleColor: string
  items: Task[]
}

export const BOARDS: Board[] = [
  // BACKLOG ---------------------------------------------------------------------------------------------------- //
  {
    id: 1,
    board: 'backlog',
    title: 'Backlog',
    titleColor: 'text-neutral-500',
    items: [
      { id: '1', title: 'Look into render bug in dashboard', column: 'backlog' },
      { id: '2', title: 'SOX compliance checklist', column: 'backlog' },
      { id: '3', title: '[SPIKE] Migrate to Azure', column: 'backlog' },
      { id: '4', title: 'Document Notifications service', column: 'backlog' },
    ],
  },
  // TODO ---------------------------------------------------------------------------------------------------- //
  {
    id: 2,
    board: 'todo',
    title: 'Todo',
    titleColor: 'text-yellow-200',
    items: [
      { id: '5', title: 'Research DB options for new microservice', column: 'todo' },
      { id: '6', title: 'Postmortem for outage', column: 'todo' },
      { id: '7', title: 'Sync with product on Q3 roadmap', column: 'todo' },
    ],
  },
  // DOING ---------------------------------------------------------------------------------------------------- //
  {
    id: 3,
    board: 'doing',
    title: 'In progress',
    titleColor: 'text-blue-200',
    items: [
      { id: '8', title: 'Refactor context providers to use Zustand', column: 'doing' },
      { id: '9', title: 'Add logging to daily CRON', column: 'doing' },
    ],
  },
  // DONE ---------------------------------------------------------------------------------------------------- //
  {
    id: 4,
    board: 'done',
    title: 'Complete',
    titleColor: 'text-emerald-200',
    items: [{ id: '10', title: 'Set up DD dashboards for Lambda listener', column: 'done' }],
  },
]
