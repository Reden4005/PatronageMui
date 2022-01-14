import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { AppDispatch } from "../../data/store";
import { useDispatch } from "react-redux";
import { initialStateActions } from "../../data/Slices/initialState-slice";

const InitialStateButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const initialStateHandler = () => {
    dispatch(initialStateActions.toggle());
    navigate("/");
  };
  return (
    <Link key="initial-state" to="/initial-state">
      <ButtonComponent
        variant="contained"
        onClick={initialStateHandler}
        name="Initial state"
      />
    </Link>
  );
};

export default InitialStateButton;