import { Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
  name: string;
  sx?: object;
  id?: string;
  disabled?: boolean;
  buttonStyle: SxProps;
}

const ButtonComponent: React.FC<ButtonProps> = props => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      sx={{ ...props.buttonStyle, ...props.sx }}
      id={props.id}
      disabled={props.disabled}>
      {props.name}
    </Button>
  );
};

export default ButtonComponent;
