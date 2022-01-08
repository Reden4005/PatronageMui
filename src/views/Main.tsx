import Header from "../components/Header";
import TableMui from "../components/Table/TableMui";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}>
      <Header />
      <TableMui />
    </Box>
  );
};

export default Main;
