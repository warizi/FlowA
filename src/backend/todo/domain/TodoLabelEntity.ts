export interface TodoLabelEntity {
  id: number | string;
  name: string;
  order: number;
  color: string;
}

export interface TodoLabelCreateEntity {
  name: string;
  order: number;
  color: string;
}
