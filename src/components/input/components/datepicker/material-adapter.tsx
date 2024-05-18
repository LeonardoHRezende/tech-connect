import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ptBR } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/pt-br';

export function withMaterialAdapter(Component: any) {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    return (
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
        adapterLocale="pt-br"
      >
        <Component {...props} />
      </LocalizationProvider>
    );
  };
}
