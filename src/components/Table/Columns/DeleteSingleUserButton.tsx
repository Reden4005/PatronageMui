import ButtonComponent from "../../ButtonComponent";
import { Link } from "react-router-dom";
import { buttonStyleDefault } from "../../../styles";
import { AppDispatch } from "../../../data/store";
import { useDispatch } from "react-redux";
import { GridRowId } from "@mui/x-data-grid";
import { listActions } from "../../../data/Slices/list-slice";

interface componentProps {
  cellId: GridRowId;
  cellValueRow: string;
}

const DeleteSingleUserButton: React.FC<componentProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Link to={`delete-user/${props.cellId}`}>
      <ButtonComponent
        variant="text"
        id="delete"
        buttonStyle={buttonStyleDefault}
        onClick={() => {
          dispatch(listActions.toggleConfirmDelete(props.cellValueRow));
        }}
        name="Delete"
      />
    </Link>
  );
};

export default DeleteSingleUserButton;
