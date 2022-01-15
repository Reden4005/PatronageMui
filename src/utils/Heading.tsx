import { SxProps } from "@mui/system";
import { Typography } from "@mui/material";

interface componentProps {
  title: string;
}

const style: SxProps = {
  mb: 1,
  color: "#B958A5",
};

const Heading: React.FC<componentProps> = props => {
  return (
    <Typography variant="h6" sx={style}>
      {props.title}
    </Typography>
  );
};

export default Heading;
