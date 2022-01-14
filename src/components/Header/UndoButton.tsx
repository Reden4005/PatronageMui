import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { AppDispatch, RootState } from "../../data/store";
import { useDispatch, useSelector } from "react-redux";
import { undoActions } from "../../data/Slices/undo-slice";

const UndoButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const deletedUsersApear = useSelector(
    (state: RootState) => state.undo.deletedUsers
  );

  const undoIsVisible = () => {
    dispatch(undoActions.undoIsVisible());
    navigate("/");
  };

  return (
    <Link key="undo" to="/undo">
      <ButtonComponent
        variant="contained"
        disabled={deletedUsersApear.length === 0}
        onClick={undoIsVisible}
        sx={{ mr: 0 }}
        name="Undo"
      />
    </Link>
  );
};

export default UndoButton;
