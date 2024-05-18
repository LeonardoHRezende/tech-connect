import SelectMui from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { SelectProps } from './interface';
import { Checkbox } from '../checkbox';



export const Select = ({
  options,
  children,
  selected = [],
  ...props
}: SelectProps) => {
  const theme = useTheme();

  return (
    <SelectMui
      size="small"
      variant="outlined"
      {...props}
      label={null}
      {
      ...(props.props.placeholder && {
        displayEmpty: true,
        renderValue: (value) => {
          if (!value) {
            return <Typography sx={{ opacity: 0.5 }}>{props.props.placeholder}</Typography>;
          }

          const selectedValues = Array.isArray(value) ? value : [value];

          return selectedValues.map((value: string) => {
            const option = options.find((option) => option.value === value);

            return option?.label;
          })
            .join(', ');
        }

      })}
      {...(props.props.multiple && {
        renderValue: (value = []) => {
          return (value as string[])
            .map((value: string) => {
              const option = options.find((option) => option.value === value);

              return option?.label;
            })
            .join(', ');
        },
      })}
      sx={{
        minWidth: 150,
        [theme.breakpoints.down('md')]: {
          minWidth: 'auto',
        },
        ...props.props?.sx,
      }}
    >
      {props.props.multiple &&
        options?.map((option) => (
          <MenuItem key={option.value!} value={option.value!}>
            <Checkbox checked={selected.indexOf(option.value as string) > -1} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}

      {!props.props.multiple &&
        options?.map((option) => (
          <MenuItem
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            key={`select-${option.value}`}
            value={option.value === null ? undefined : option.value}
          >
            {option.label}
          </MenuItem>
        ))}
    </SelectMui>
  );
};
