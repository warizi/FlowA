
export interface TodoEntity {
  id: number | string;
  title: string;
  isDone: 0 | 1;
  sub?: string;
  order: number;
  isImportant: 0 | 1;
  cateId?: number | string;
  memo?: string;
  doneDate?: string | null;
  startDate?: string;
  endDate?: string;
  repeatType?: string;
  repeatDate?: string;
  labelId?: number | string | null;
  updatedAt?: string;
  createdAt?: string;
}

export interface TodoCreateEntity {
  title: string;
  isDone: 0 | 1;
  sub?: string;
  order: number;
  isImportant: 0 | 1;
  cateId?: number | string;
  memo?: string;
  doneDate?: string | null;
  startDate?: string;
  endDate?: string;
  repeatType?: string;
  repeatDate?: string;
  labelId?: number | string | null;
  updatedAt?: string;
  createdAt?: string;
}