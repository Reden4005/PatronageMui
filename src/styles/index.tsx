import { SxProps } from "@mui/system";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
export const buttonStyleContained: SxProps = {
  background: "#B958A5",
  mr: 3,
  ":hover": { background: "#fdfaf4", color: "#B958A5" },
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
