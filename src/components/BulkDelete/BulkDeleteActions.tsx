import ButtonComponent from "../../utils/ButtonComponent";
import { Box } from "@mui/system";
import {
  buttonStyleContainedDanger,
  buttonStyleContained,
  popupBoxStyle,
} from "../../styles";
import { AppDispatch } from "../../data/store";
import { useDispatch } from "react-redux";
import { listActions } from "../../data/Slices/list-slice";
import { bulkDeleteActions } from "../../data/Slices/bulkDelete-slice";
import { useNavigate } from "react-router-dom";

interface componentProps {
  onConfirm: () => void;
}

const BulkDeletActions: React.FC<componentProps> = props => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleCancel = () => {
    dispatch(listActions.bulkDeleteIsVisible());
    dispatch(bulkDeleteActions.clear());
    navigate("/");
  };

  return (
    <Box sx={popupBoxStyle}>
      <ButtonComponent
        type="button"
        onClick={handleCancel}
        variant="contained"
        name="Cancel"
        buttonStyle={buttonStyleContained}
      />
      <ButtonComponent
        type="button"
        onClick={props.onConfirm}
        variant="contained"
        buttonStyle={buttonStyleContainedDanger}
        name="Delete users"
      />
    </Box>
  );
};

export default BulkDeletActions;
