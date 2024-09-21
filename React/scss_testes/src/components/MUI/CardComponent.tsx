import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ButtonComponent from './ButtonComponent';

function CardComponent() {
  const handleClick = () => {
    alert('Button inside Card clicked!');
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material-UI Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card component using Material-UI in a React app.
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonComponent label="Click Me" onClick={handleClick} />
      </CardActions>
    </Card>
  );
}

export default CardComponent;
