import { detailsVisibleActions } from "../../data/Slices/detailsVisible-slice";
import { editActions } from "../../data/Slices/edit-slice";
import { listActions } from "../../data/Slices/list-slice";
import { AppDispatch } from "../../data/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";

const Columns: () => GridColDef[] = () => {
  const dispatch = useDispatch<AppDispatch>();

  const style = {
    background: "#fdfaf4",
    color: "#B958A5",
    mr: 2,
    ":hover": { background: "#B958A5", color: "#fdfaf4" },
  };

  return [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: params => <div>{params.value}</div>,
    },
    {
      field: "lastName",
      headerName: "Lastname",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      flex: 0.5,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
            padding: "25px",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "dateOfBirth",
      headerName: "Date of birth",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value}
        </div>
      ),
    },
    {
      field: "hobbiesName",
      headerName: "Hobbies",
      flex: 1,
      renderCell: params => (
        <div
          style={{
            lineHeight: "24px",
            whiteSpace: "normal",
          }}>
          {params.value.join(", ")}
        </div>
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
            <Link to={`/user-details/${cellValues.id}`}>
              <Button
                id="details"
                sx={style}
                onClick={() => {
                  dispatch(detailsVisibleActions.toggle(cellValues.row));
                }}>
                Details
              </Button>
            </Link>
            <Link to={`delete-user/${cellValues.id}`}>
              <Button
                id="delete"
                sx={style}
                onClick={() => {
                  dispatch(listActions.toggleConfirmDelete(cellValues.row));
                }}>
                Delete
              </Button>
            </Link>
            <Link to={`edit-user/${cellValues.id}`}>
              <Button
                id="edit"
                sx={style}
                onClick={() => {
                  dispatch(editActions.toggle(cellValues.row));
                }}>
                Edit
              </Button>
            </Link>
          </Box>
        );
      },
    },
  ];
};

export default Columns;
