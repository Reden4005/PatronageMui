import Header from "../components/Header/Header";
import TableMui from "../components/Table/TableMui";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";

const style: SxProps = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  flexDirection: "column",
};

const Main = () => {
  return (
    <Box sx={style}>
      <Header />
      <TableMui />
    </Box>
  );
};

export default Main;
