import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import {
  Card,
  CardContent,
  Typography,
  Modal,
  Button,
  Divider,
} from "@mui/material";

interface myProps {
  visible: boolean;
  onOk: () => void;
}

const DetailsOfUser: React.FC<myProps> = props => {
  const details = useSelector((state: RootState) => state.details.details);

  return (
    <>
      <Modal open={props.visible}>
        <Card
          sx={{
            maxWidth: "40%",
            position: "absolute",
            top: "10%",
            left: "30%",
            "@media (max-width: 600px)": { left: "1%" },
          }}>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 0.1, color: "#B958A5" }}>
              Details about user
            </Typography>
            <Divider />
            <Typography sx={{ mb: 1, mt: 2, fontWeight: "bold" }}>
              PERSONAL INFORMATION
            </Typography>
            <Typography sx={{ mb: 0.5 }}>
              {details?.name} {details?.lastName}
            </Typography>
            <Typography sx={{ mb: 0.5 }}>Age: {details?.age}</Typography>
            <Typography sx={{ mb: 0.5 }}>
              Date of birth: {details?.dateOfBirth}
            </Typography>
            <Typography sx={{ mb: 0.5 }}>Gender: {details?.gender}</Typography>
            <Typography sx={{ mb: 1, mt: 2, fontWeight: "bold" }}>
              CONTACT INFORMATION
            </Typography>
            <Typography sx={{ mb: 0.5 }}>Email: {details?.email}</Typography>
            <Typography sx={{ mb: 0.5 }}>
              Phone number {details?.phoneNumber}
            </Typography>
            <Typography sx={{ mb: 0.5 }}>
              Address: {details?.address}
            </Typography>
            <Typography sx={{ mb: 1, mt: 2, fontWeight: "bold" }}>
              ADDITIONAL INFORMATION
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Hobbies: {details?.hobbiesName}
            </Typography>
            <Button
              onClick={props.onOk}
              variant="contained"
              sx={{
                background: "#B958A5",
                mr: 3,
                ml: "80%",
                ":hover": {
                  background: "#fdfaf4",
                  color: "#B958A5",
                  textAlign: "end",
                },
              }}>
              Close
            </Button>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default DetailsOfUser;
