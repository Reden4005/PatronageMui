import ButtonComponent from "../../../utils/ButtonComponent";
import { Link } from "react-router-dom";
import { buttonStyleDefault } from "../../../styles";
import { AppDispatch } from "../../../data/store";
import { useDispatch } from "react-redux";
import { GridRowId } from "@mui/x-data-grid";
import { editActions } from "../../../data/Slices/edit-slice";

interface componentProps {
  cellId: GridRowId;
  cellValueRow: string;
}

const EditUserButton: React.FC<componentProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Link to={`edit-user/${props.cellId}`}>
      <ButtonComponent
        variant="text"
        id="edit"
        buttonStyle={buttonStyleDefault}
        onClick={() => {
          dispatch(editActions.toggle(props.cellValueRow));
        }}
        name="Edit"
      />
    </Link>
  );
};

export default EditUserButton;
