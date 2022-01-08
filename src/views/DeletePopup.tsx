import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../data/store";
import { listActions } from "../data/Slices/list-slice";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

interface myProps {
  visible: boolean;
  deleteUser: () => void;
}

const DeletePopup: React.FC<myProps> = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const deletedUser = useSelector(
    (state: RootState) => state.listOfUsers.userToDelete
  );

  const handleCancel = () => {
    dispatch(listActions.toggleConfirmDelete(null));
    navigate("/");
  };

  return (
    <Modal open={props.visible}>
      <Card
        sx={{
          minWidth: "30%",
          position: "absolute",
          top: "20%",
          left: "35%",
          "@media (max-width: 600px)": { left: "10%" },
        }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1, color: "#B958A5" }}>
            Are you sure you want to delete:
          </Typography>
          <Typography>
            {deletedUser?.name} {deletedUser?.lastName}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button
              type="button"
              onClick={handleCancel}
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
              onClick={props.deleteUser}
              variant="contained"
              sx={{
                background: "red",
                ":hover": {
                  background: "#fdfaf4",
                  color: "red",
                  textAlign: "end",
                },
              }}>
              Delete user
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default DeletePopup;
