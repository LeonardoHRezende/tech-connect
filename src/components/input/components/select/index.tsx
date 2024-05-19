import Stack from '@mui/material/Stack';
import SelectMui from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { Checkbox } from '../checkbox';
import type { SelectProps } from '@mui/material/Select';

export interface SelectOptions {
  label: string;
  value: number | string | null;
}

export type SelectOptionsList = SelectOptions[];

export interface ISelectProps extends Pick<SelectProps, 'placeholder' | 'sx' | 'fullWidth' | 'onChange' | 'value' | 'error'> {
  options: SelectOptionsList;
  label?: string;
  children?: any;
  selected?: string[];
}


export const Select = ({
  options,
  children,
  label,
  selected = [],
  ...props
}: ISelectProps) => {
  const theme = useTheme();

  return (

    <Stack>
      {label && <Typography variant="caption">{label}</Typography>}
      <SelectMui
        size="small"
        variant="outlined"
        label={null}
        {...props}
        {
        ...(props?.placeholder && {
          displayEmpty: true,
          renderValue: (value) => {
            if (!value) {
              return <Typography sx={{ opacity: 0.5 }}>{props?.placeholder}</Typography>;
            }

            const selectedValues = Array.isArray(value) ? value : [value];

            return selectedValues.map((value: string) => {
              const option = options.find((option) => option.value === value);

              return option?.label;
            })
              .join(', ');
          }

        })}
        sx={{
          minWidth: 150,
          [theme.breakpoints.down('md')]: {
            minWidth: 'auto',
          },
          ...props?.sx,
        }}
      >

        {options?.map((option) => (
          <MenuItem
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            key={`select-${option.value}`}
            value={option.value === null ? undefined : option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </SelectMui>
    </Stack>
  );
};
