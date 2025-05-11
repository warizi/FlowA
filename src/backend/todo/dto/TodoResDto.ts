
export interface TodoResDto {
  id: number | string;
  title: string;
  isDone: boolean;
  sub?: TodoSubDto[];
  order: number;
  isImportant: boolean;
  cateId?: number | string;
  memo?: string;
  doneDate?: string | null;
  startDate?: string;
  endDate?: string;
  repeatType?: string;
  repeatDate?: string;
  label?: TodoLabelDto | null;
  updatedAt?: string;
  createdAt?: string;
}

export interface TodoCreateResDto {
  title: string;
  isDone: boolean;
  sub?: TodoSubDto[];
  order: number;
  isImportant: boolean;
  cateId?: number | string;
  memo?: string;
  doneDate?: string | null;
  startDate?: string;
  endDate?: string;
  repeatType?: string;
  repeatDate?: string;
  label?: TodoLabelDto | null;
  updatedAt?: string;
  createdAt?: string;
}

export interface TodoSubDto {
  text: string;
  isDone: boolean;
}

export interface TodoLabelDto {
  id: number | string;
  name: string;
  order: number;
  color: string;
}