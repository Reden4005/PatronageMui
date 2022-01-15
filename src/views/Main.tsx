import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import { Box } from "@mui/material";
import { mainStyle } from "../styles";

const Main: React.FC = () => {
  return (
    <Box sx={mainStyle}>
      <Header />
      <Table />
    </Box>
  );
};

export default Main;
