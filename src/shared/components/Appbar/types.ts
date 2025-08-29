export type NavColumn = { title?: string; links: { label: string; to: string; icon?: React.ReactNode }[] };
export type NavItem = { key: string; label: string; route?: string; columns?: NavColumn[]; icon?: React.ReactNode };
