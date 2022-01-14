import { Button } from "@mui/material";

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
  name: string;
  sx?: object;
  id?: string;
  disabled?: boolean;
}

const buttonStyle = {
  background: "#B958A5",
  mr: 3,
  ":hover": { background: "#fdfaf4", color: "#B958A5" },
};

const ButtonComponent: React.FC<ButtonProps> = props => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      sx={{ ...buttonStyle, ...props.sx }}
      id={props.id}
      disabled={props.disabled}>
      {props.name}
    </Button>
  );
};

export default ButtonComponent;
