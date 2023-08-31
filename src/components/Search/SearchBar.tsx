import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import filter from "../../assets/filter.svg";
import { Grid } from "@mui/material";

export default function SearchBar() {
  return (
    <Grid container item xs={12} sx={{ justifyContent: "space-between" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "calc(100% - 60px)",
          background: "#FFF",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
          borderRadius: "45.294px",
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} />
      </Paper>
      <IconButton
        type="button"
        sx={{
          p: "10px 20px",
          background: "#EE85A8",
          width: "45.235px",
          borderRadius: "18px",
        }}
        aria-label="filter"
      >
        <img
          src={filter}
          alt="filter"
          style={{ width: "13px", height: "auto" }}
        />
      </IconButton>
    </Grid>
  );
}
