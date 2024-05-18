import type { SelectProps as SelectPropsMui } from '@mui/material/Select';

export interface SelectOptions {
  label: string;
  value: number | string | null;
}

export type SelectOptionsList = SelectOptions[];

export interface SelectProps {
  options: SelectOptionsList;
  children?: any;
  selected?: string[];
  props: SelectPropsMui;
}
