import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../data/store";
import { listActions } from "../data/Slices/list-slice";
import { bulkDeleteActions } from "../data/Slices/bulkDelete-slice";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Modal,
} from "@mui/material";
import Backdrop from "../components/Modal";
interface myProps {
  visible: boolean;
  onOk: () => void;
}

const BulkDeletePopup: React.FC<myProps> = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const deletedUsers = useSelector(
    (state: RootState) => state.listOfUsers.usersToDelete
  );

  const handleCancel = () => {
    dispatch(listActions.bulkDeleteIsVisible());
    dispatch(bulkDeleteActions.clear());
    navigate("/");
  };

  return (
    // <Modal open={props.visible}>
    <Backdrop visible={props.visible}>
      <Card
        sx={{
          // width: "30%",
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
          {deletedUsers
            ? deletedUsers!.map(user => (
                <Typography key={`del${user.id}`}>
                  {user?.name} {user?.lastName}
                </Typography>
              ))
            : null}
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
              onClick={props.onOk}
              variant="contained"
              sx={{
                background: "red",
                ":hover": {
                  background: "#fdfaf4",
                  color: "red",
                  textAlign: "end",
                },
              }}>
              Delete users
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Backdrop>
    // </Modal>
  );
};

export default BulkDeletePopup;
