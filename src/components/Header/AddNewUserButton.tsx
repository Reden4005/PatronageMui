import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { AppDispatch } from "../../data/store";
import { useDispatch } from "react-redux";
import { formActions } from "../../data/Slices/form-slice";

const AddNewUserButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInputHandler = () => {
    dispatch(formActions.formOn());
  };
  return (
    <Link key="addNewUser" to="/add-user">
      <ButtonComponent
        onClick={userInputHandler}
        variant="contained"
        id="addNewUser"
        name="Add new user"
      />
    </Link>
  );
};

export default AddNewUserButton;
