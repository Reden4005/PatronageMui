import BackdropComponent from "../utils/Backdrop";
import { Card, CardContent } from "@mui/material";
import { popupArrangement } from "../styles";
import Headling from "../utils/Heading";
import DeletedUser from "../components/BulkDelete/SingleDeleted/DeletedUser";
import DeletedUsersActions from "../components/BulkDelete/SingleDeleted/DeletedUserActions";

interface myProps {
  visible: boolean;
  deleteUser: () => void;
}

const DeletePopup: React.FC<myProps> = props => {
  return (
    <BackdropComponent visible={props.visible}>
      <Card sx={popupArrangement}>
        <CardContent>
          <Headling title="Are you sure you want to delete:" />
          <DeletedUser />
          <DeletedUsersActions deleteUser={props.deleteUser} />
        </CardContent>
      </Card>
    </BackdropComponent>
  );
};

export default DeletePopup;
