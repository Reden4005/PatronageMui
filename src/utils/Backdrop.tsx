import { Backdrop } from "@mui/material";

interface BackdropProps {
  visible: boolean;
  children: JSX.Element;
}

const BackdropComponent: React.FC<BackdropProps> = props => {
  return (
    <Backdrop
      open={props.visible}
      transitionDuration={{ appear: 1000, enter: 1000, exit: 2000 }}>
      {props.children}
    </Backdrop>
  );
};

export default BackdropComponent;
