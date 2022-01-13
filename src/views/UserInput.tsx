import { User } from "../types";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "../data/store";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Input,
  InputLabel,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { useEffect, useState } from "react";

interface UserFormProps {
  visible: boolean;
  onCreate: (values: User) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ visible, onCreate, onCancel }) => {
  let navigate = useNavigate();
  const editState = useSelector((state: RootState) => state.edit.edit);
  const hobbies = useSelector((state: RootState) => state.hobbies.hobbies);
  const [userHobbies, setUserHobbies] = useState(editState.hobbiesName);
  const [formValues, setFormValues] = useState(editState);

  useEffect(() => {
    setFormValues(formValues => ({
      ...formValues,
      hobbiesName: userHobbies,
    }));
  }, [userHobbies]);

  const handleInputChange: (e: any) => void = e => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleGenderChange: (e: any) => void = e => {
    setFormValues({
      ...formValues,
      gender: e.target.value,
    });
  };

  const handleHobbiesChange: (e: any) => void = e => {
    setUserHobbies([...e.target.value]);
  };

  const onSubmit: (event: any) => void = event => {
    event.preventDefault();
    onCreate({ ...formValues, id: uuidv4() });
    navigate("/");
  };
  return (
    <Modal open={visible}>
      <Card
        sx={{
          minWidth: "50%",
          position: "absolute",
          top: "10%",
          left: "30%",
          "@media (max-width: 600px)": { left: "1%" },
        }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Typography sx={{ mb: 1, color: "#B958A5", fontWeight: "bold" }}>
              PERSONAL INFORMATION
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel htmlFor="user-name" sx={{ alignSelf: "end" }}>
                Name <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Input
                id="user-name"
                name="name"
                type="text"
                required
                value={formValues.name}
                onChange={handleInputChange}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel htmlFor="user-lname" sx={{ alignSelf: "end" }}>
                Last name <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Input
                id="user-lname"
                name="lastName"
                type="text"
                required
                value={formValues.lastName}
                onChange={handleInputChange}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                mb: 3,
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel
                htmlFor="user-age"
                sx={{
                  alignSelf: "end",

                  width: "20%",
                }}>
                Age <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Input
                id="user-age"
                required
                name="age"
                type="number"
                inputProps={{ min: 0 }}
                value={formValues.age}
                onChange={handleInputChange}
                sx={{ width: "10%", alignSelf: "flex-start" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel
                htmlFor="user-date"
                sx={{ alignSelf: "end", width: "20%" }}>
                Date of birth
              </InputLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  inputFormat="yyyy-MM-dd"
                  mask="____-__-__"
                  value={formValues.dateOfBirth}
                  onChange={(newValue: Date | null) => {
                    const userDate =
                      newValue!.getFullYear() +
                      "-" +
                      (newValue!.getMonth() + 1 > 9
                        ? newValue!.getMonth() + 1
                        : "0" + (newValue!.getMonth() + 1)) +
                      "-" +
                      (newValue!.getDate() > 9
                        ? newValue!.getDate()
                        : "0" + newValue!.getDate());

                    setFormValues({
                      ...formValues,
                      dateOfBirth: userDate,
                    });
                  }}
                  renderInput={params => (
                    <TextField
                      sx={{
                        width: "30%",
                        alignSelf: "flex-start",
                      }}
                      variant="standard"
                      placeholder="YYYY-MM-DD"
                      name="dateOfBirth"
                      onChange={handleInputChange}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}>
              <InputLabel
                id="user-gender"
                sx={{ alignSelf: "end", width: "20%" }}>
                Gender
              </InputLabel>
              <Select
                sx={{
                  width: "30%",
                  alignSelf: "flex-start",
                }}
                labelId="user-gender"
                id="user-gender"
                label="Gender"
                name="gender"
                variant="standard"
                onChange={handleGenderChange}
                value={formValues.gender}>
                <MenuItem value={"male"}>male</MenuItem>
                <MenuItem value={"female"}>female</MenuItem>
                <MenuItem value={"undefined"}>undefined</MenuItem>
              </Select>
            </Box>
            <Typography
              sx={{ mb: 1, mt: 2, color: "#B958A5", fontWeight: "bold" }}>
              CONTACT INFORMATION
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel htmlFor="user-email" sx={{ alignSelf: "end" }}>
                Email <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Input
                id="user-email"
                name="email"
                type="email"
                required
                value={formValues.email}
                onChange={handleInputChange}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel htmlFor="user-phone" sx={{ alignSelf: "end" }}>
                Phone number
              </InputLabel>
              <Input
                id="user-phone"
                name="phoneNumber"
                type="text"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                sx={{ width: "80%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}>
              <InputLabel htmlFor="user-address" sx={{ alignSelf: "end" }}>
                Address
              </InputLabel>
              <Input
                id="user-address"
                name="address"
                type="text"
                value={formValues.address}
                onChange={handleInputChange}
                sx={{ width: "80%" }}
              />
            </Box>
            <Typography
              sx={{ mb: 1, mt: 2, color: "#B958A5", fontWeight: "bold" }}>
              ADDITIONAL INFORMATION
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}>
              <InputLabel
                id="user-hobbies"
                sx={{ alignSelf: "end", width: "20%" }}>
                Hobbies <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <Select
                multiple
                variant="standard"
                required
                value={formValues.hobbiesName}
                sx={{
                  width: "80%",
                  alignSelf: "flex-start",
                }}
                labelId="user-hobbies"
                id="user-hobbies"
                label="Hobbies"
                name="hobbies"
                onChange={handleHobbiesChange}>
                {hobbies.map(hobbie => (
                  <MenuItem key={hobbie.id} value={hobbie.name} sx={{ mb: 1 }}>
                    {hobbie.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                type="button"
                onClick={onCancel}
                variant="contained"
                sx={{
                  background: "#B958A5",
                  mr: 2,
                  ":hover": {
                    background: "#fdfaf4",
                    color: "#B958A5",
                    textAlign: "end",
                  },
                }}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "#B958A5",
                  ":hover": {
                    background: "#fdfaf4",
                    color: "#B958A5",
                    textAlign: "end",
                  },
                }}>
                {editState.name ? "Save user" : "Add user"}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default UserForm;
