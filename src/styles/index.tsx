import { SxProps } from "@mui/system";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
export const buttonStyleContained: SxProps = {
  background: "#B958A5",
  mr: 3,
  ":hover": { background: "#fdfaf4", color: "#B958A5" },
};

export const buttonStyleContainedDanger: SxProps = {
  background: "red",
  ":hover": {
    background: "#fdfaf4",
    color: "red",
  },
};

export const buttonStyleDefault: SxProps = {
  background: "#fdfaf4",
  color: "#B958A5",
  mr: 1,
  ":hover": { background: "#B958A5", color: "#fdfaf4" },
};

export const rowsStyle: CSSProperties = {
  lineHeight: "24px",
  whiteSpace: "normal",
  wordBreak: "break-word",
};

export const mainStyle: SxProps = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  flexDirection: "column",
};

export const popupArrangement: SxProps = {
  top: "20%",
  position: "fixed",
  overflow: "auto",
};

export const popupBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "flex-end",
  mt: 3,
};
