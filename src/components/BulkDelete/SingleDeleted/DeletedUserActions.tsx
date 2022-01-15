import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../data/store";
import { listActions } from "../../../data/Slices/list-slice";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  popupBoxStyle,
  buttonStyleContained,
  buttonStyleContainedDanger,
} from "../../../styles";
import ButtonComponent from "../../../utils/ButtonComponent";

interface componentProps {
  deleteUser: () => void;
}

const DeletedUsersActions: React.FC<componentProps> = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleCancel = () => {
    dispatch(listActions.toggleConfirmDelete(null));
    navigate("/");
  };
  return (
    <Box sx={popupBoxStyle}>
      <ButtonComponent
        type="button"
        onClick={handleCancel}
        variant="contained"
        buttonStyle={buttonStyleContained}
        name="Cancel"
      />

      <ButtonComponent
        type="button"
        onClick={props.deleteUser}
        variant="contained"
        buttonStyle={buttonStyleContainedDanger}
        name="Delete user"
      />
    </Box>
  );
};

export default DeletedUsersActions;
