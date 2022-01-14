import { Toolbar, Typography, Box } from "@mui/material";
import { SxProps } from "@mui/system";
import AddNewUserButton from "./AddNewUserButton";
import BulkDeleteButton from "./BulkDeleteButton";
import InitialStateButton from "./InitialStateButton";
import UndoButton from "./UndoButton";

const Header: React.FC = () => {
  const style: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    mb: 2,
  };

  return (
    <Toolbar sx={style}>
      <Typography variant="h6" noWrap component="div">
        USERS BASE
      </Typography>
      <Box>
        <AddNewUserButton />
        <BulkDeleteButton />
        <InitialStateButton />
        <UndoButton />
      </Box>
    </Toolbar>
  );
};

export default Header;
