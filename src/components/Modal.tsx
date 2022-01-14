import { Modal } from "@mui/material";

interface BackdropProps {
  visible: boolean;
  children: JSX.Element;
}

const Backdrop: React.FC<BackdropProps> = props => {
  return <Modal open={props.visible}>{props.children}</Modal>;
};

export default Backdrop;
