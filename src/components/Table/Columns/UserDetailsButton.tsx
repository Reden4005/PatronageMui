import ButtonComponent from "../../ButtonComponent";
import { Link } from "react-router-dom";
import { buttonStyleDefault } from "../../../styles";
import { AppDispatch } from "../../../data/store";
import { useDispatch } from "react-redux";
import { detailsVisibleActions } from "../../../data/Slices/detailsVisible-slice";
import { GridRowId } from "@mui/x-data-grid";

interface componentProps {
  cellId: GridRowId;
  cellValueRow: string;
}

const UserDetailsButton: React.FC<componentProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Link to={`/user-details/${props.cellId}`}>
      <ButtonComponent
        variant="text"
        id="details"
        buttonStyle={buttonStyleDefault}
        onClick={() => {
          dispatch(detailsVisibleActions.toggle(props.cellValueRow));
        }}
        name="Details"
      />
    </Link>
  );
};

export default UserDetailsButton;
