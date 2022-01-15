import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";

const ListOfDeletedUsers = () => {
  const deletedUsers = useSelector(
    (state: RootState) => state.listOfUsers.usersToDelete
  );
  return (
    <>
      {deletedUsers
        ? deletedUsers!.map(user => (
            <Typography key={`del${user.id}`}>
              {user?.name} {user?.lastName}
            </Typography>
          ))
        : null}
    </>
  );
};

export default ListOfDeletedUsers;
