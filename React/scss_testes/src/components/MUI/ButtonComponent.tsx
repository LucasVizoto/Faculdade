import Button from '@mui/material/Button';

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
}

function ButtonComponent({ label, onClick }: ButtonComponentProps) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
}

export default ButtonComponent;
