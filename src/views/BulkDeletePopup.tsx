import { Card, CardContent } from "@mui/material";
import BackdropComponent from "../utils/Backdrop";
import BulkDeletActions from "../components/BulkDelete/BulkDeleteActions";
import Heading from "../utils/Heading";
import ListOfDeletedUsers from "../components/BulkDelete/ListOfDeletedUsers";
import { popupArrangement } from "../styles";

interface componentProps {
  visible: boolean;
  onOk: () => void;
}

const BulkDeletePopup: React.FC<componentProps> = props => {
  return (
    <BackdropComponent visible={props.visible}>
      <Card sx={popupArrangement}>
        <CardContent>
          <Heading title="Are you sure you want to delete:" />
          <ListOfDeletedUsers />
          <BulkDeletActions onConfirm={props.onOk} />
        </CardContent>
      </Card>
    </BackdropComponent>
  );
};

export default BulkDeletePopup;
