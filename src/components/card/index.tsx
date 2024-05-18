import { CardContent, CardProps, Card as MuiCard } from "@mui/material";

interface ICard extends CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children, ...cardProps }: ICard) => {
  return (
    <MuiCard
      {...cardProps}
      sx={{
        p: 0,
        boxShadow: 'none',
        ...cardProps.sx
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {children}
      </CardContent>
    </MuiCard>
  );
};

