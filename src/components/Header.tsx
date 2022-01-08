import { AppDispatch, RootState } from "../data/store";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../data/Slices/form-slice";
import { listActions } from "../data/Slices/list-slice";
import { initialStateActions } from "../data/Slices/initialState-slice";
import { undoActions } from "../data/Slices/undo-slice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userInputHandler = () => {
    dispatch(formActions.formOn());
  };

  const bulkDeleteHandler = () => {
    dispatch(listActions.bulkDeleteIsVisible());
  };

  const selectedRowKeys = useSelector(
    (state: RootState) => state.bulkDeleteKeys.keys
  );

  const deletedUsersApear = useSelector(
    (state: RootState) => state.undo.deletedUsers
  );

  const initialStateHandler = () => {
    dispatch(initialStateActions.toggle());
    navigate("/");
  };

  const undoIsVisible = () => {
    dispatch(undoActions.undoIsVisible());
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "15vh",
        display: "flex",
        flexWrap: "wrap",
      }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "#FED1EF", boxShadow: "none", pb: 3, pt: 3 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography variant="h6" noWrap component="div">
            USERS BASE
          </Typography>
          <Box sx={{ "@media (max-width: 1000px)": { flexDirection: "row" } }}>
            <Link key="addNewUser" to="/add-user">
              <Button
                onClick={userInputHandler}
                variant="contained"
                sx={{
                  background: "#B958A5",
                  mr: 3,
                  ":hover": { background: "#fdfaf4", color: "#B958A5" },
                }}>
                Add new user
              </Button>
            </Link>
            <Link key="bulkDelete" to="/bulk-delete">
              <Button
                sx={{
                  background: "#B958A5",
                  mr: 3,
                  ":hover": { background: "#fdfaf4", color: "#B958A5" },
                }}
                variant="contained"
                onClick={bulkDeleteHandler}
                disabled={selectedRowKeys.length === 0}>
                Bulk delete
              </Button>
            </Link>
            <Link key="initial-state" to="/initial-state">
              <Button
                variant="contained"
                onClick={initialStateHandler}
                sx={{
                  background: "#B958A5",
                  mr: 3,
                  ":hover": { background: "#fdfaf4", color: "#B958A5" },
                }}>
                Initial state
              </Button>
            </Link>
            <Link key="undo" to="/undo">
              <Button
                variant="contained"
                disabled={deletedUsersApear.length === 0}
                onClick={undoIsVisible}
                sx={{
                  background: "#B958A5",
                  ":hover": { background: "#fdfaf4", color: "#B958A5" },
                }}>
                Undo
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
