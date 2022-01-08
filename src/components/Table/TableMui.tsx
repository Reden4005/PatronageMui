import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { RootState } from "../../data/store";
import Columns from "./Columns";
import { AppDispatch } from "../../data/store";
import { useDispatch } from "react-redux";
import { bulkDeleteActions } from "../../data/Slices/bulkDelete-slice";
import { listActions } from "../../data/Slices/list-slice";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();

  const actualListOfUsers: GridRowsProp = useSelector(
    (state: RootState) => state.listOfUsers.usersLists
  );

  return (
    <DataGrid
      autoHeight={true}
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        background: "white",
        whiteSpace: "normal",
        wordWrap: "break-word",
        "& .MuiDataGrid-row, & .MuiDataGrid-cell": {
          minHeight: "max-content !important",
          maxHeight: "none !important",
        },
        "& .MuiSvgIcon-root": {
          color: "#B958A5",
        },
        "& .Mui-selected": {
          background: "rgba(254, 209, 239, 0.2) !important",
        },
      }}
      rows={actualListOfUsers}
      columns={Columns()}
      pageSize={15}
      rowsPerPageOptions={[15]}
      checkboxSelection
      onSelectionModelChange={e => {
        const selectedIDs = new Set(e);
        const selectedRowData = actualListOfUsers.filter(row =>
          selectedIDs.has(row.id)
        );
        dispatch(listActions.bulkDeleteData(selectedRowData));
        dispatch(bulkDeleteActions.addKeys(e));
        console.log(selectedRowData);
      }}
    />
  );
}
