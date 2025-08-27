export type NavColumn = { title?: string; links: { label: string; to: string }[] };
export type NavItem = { key: string; label: string; route?: string; columns?: NavColumn[]; icon?: React.ReactNode };
