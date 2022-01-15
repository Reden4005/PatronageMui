import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../data/store";
import { undoActions } from "../data/Slices/undo-slice";
import { bulkDeleteActions } from "../data/Slices/bulkDelete-slice";
import { buttonsActions } from "../data/Slices/buttons-slice";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import BackdropComponent from "../utils/Backdrop";
import { popupArrangement } from "../styles";

interface myProps {
  visible: boolean;
  onOk: () => void;
}

const UndoPopup: React.FC<myProps> = props => {
  const deletedUsers = useSelector(
    (state: RootState) => state.undo.deletedUsers
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onCancel = () => {
    dispatch(undoActions.undoIsNotVisible());
    dispatch(undoActions.clearStateUsersToRecover());
    dispatch(buttonsActions.buttonsClear());
    dispatch(bulkDeleteActions.clear());
    navigate("/");
  };

  return (
    <BackdropComponent visible={props.visible}>
      <Card sx={popupArrangement}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, color: "#B958A5" }}>
            Deleted users:
          </Typography>
          {deletedUsers.map(user => (
            <Box
              sx={{ display: "flex", justifyContent: "space-between" }}
              key={`undoBox${user.id}`}>
              <Typography key={`undo${user.id}`}>
                <span
                  id={`tick${user.id}`}
                  style={{
                    visibility: "hidden",
                    color: "green",
                    paddingRight: 10,
                  }}>
                  ✔
                </span>
                {user.name} {user.lastName}
              </Typography>
              <Button
                disabled={false}
                id={`btn${user.id}`}
                sx={{
                  background: "#fdfaf4",
                  color: "#B958A5",
                  mb: 1,
                  ":hover": {
                    background: "#fdfaf4",
                    color: "#B958A5",
                    textAlign: "end",
                  },
                }}
                onClick={() => {
                  dispatch(buttonsActions.addButton(`btn${user.id}`));
                  dispatch(undoActions.usersToRecover(user));
                }}>
                Restore
              </Button>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              type="button"
              onClick={onCancel}
              variant="contained"
              sx={{
                background: "#B958A5",
                mr: 2,
                ":hover": {
                  background: "#fdfaf4",
                  color: "#B958A5",
                  textAlign: "end",
                },
              }}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={props.onOk}
              variant="contained"
              sx={{
                background: "#B958A5",
                ":hover": {
                  background: "#fdfaf4",
                  color: "#B958A5",
                  textAlign: "end",
                },
              }}>
              Recover marked users
            </Button>
          </Box>
        </CardContent>
      </Card>
    </BackdropComponent>
  );
};

export default UndoPopup;
