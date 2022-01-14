import { GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import UserDetailsButton from "./UserDetailsButton";
import DeleteSingleUserButton from "./DeleteSingleUserButton";
import EditUserButton from "./EditUserButton";
import { rowsStyle } from "../../../styles";

const Columns: () => GridColDef[] = () => {
  return [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      renderCell: params => <div>{params.value}</div>,
    },
    {
      field: "lastName",
      headerName: "Lastname",
      flex: 0.5,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "dateOfBirth",
      headerName: "Date of birth",
      flex: 1,
      renderCell: params => <div style={rowsStyle}>{params.value}</div>,
    },
    {
      field: "hobbiesName",
      headerName: "Hobbies",
      flex: 1,
      renderCell: params => (
        <div style={rowsStyle}>{params.value.join(", ")}</div>
      ),
    },
    {
      field: "actions",
      flex: 2,
      headerName: "Actions",
      sortable: false,
      filterable: false,
      renderCell: cellValues => {
        return (
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <UserDetailsButton
              cellId={cellValues.id}
              cellValueRow={cellValues.row}
            />
            <DeleteSingleUserButton
              cellId={cellValues.id}
              cellValueRow={cellValues.row}
            />
            <EditUserButton
              cellId={cellValues.id}
              cellValueRow={cellValues.row}
            />
          </Box>
        );
      },
    },
  ];
};

export default Columns;
