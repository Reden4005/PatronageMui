import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../data/store";

const DeletedUser = () => {
  const deletedUser = useSelector(
    (state: RootState) => state.listOfUsers.userToDelete
  );
  return (
    <Typography>
      {deletedUser?.name} {deletedUser?.lastName}
    </Typography>
  );
};

export default DeletedUser;
