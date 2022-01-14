import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";
import { AppDispatch, RootState } from "../../data/store";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../../data/Slices/list-slice";
import { buttonStyleContained as style } from "../../styles";

const BulkDeleteButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bulkDeleteHandler = () => {
    dispatch(listActions.bulkDeleteIsVisible());
  };
  const selectedRowKeys = useSelector(
    (state: RootState) => state.bulkDeleteKeys.keys
  );
  return (
    <Link key="bulkDelete" to="/bulk-delete">
      <ButtonComponent
        variant="contained"
        onClick={bulkDeleteHandler}
        disabled={selectedRowKeys.length === 0}
        name="Bulk delete"
        buttonStyle={style}
      />
    </Link>
  );
};

export default BulkDeleteButton;
