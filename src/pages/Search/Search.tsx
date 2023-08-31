import { Grid } from "@mui/material";
import "/src/App.css";
import "/src/index.css";
import bell from "../../assets/bell.svg";
import SearchBar from "../../components/Search/SearchBar";

export default function Search(): JSX.Element {
  return (
    <Grid container item sx={{ backgroud: "#F5F5F5" }}>
      <Grid container item xs={12} sx={{ justifyContent: "flex-end" }}>
        <img src={bell} alt="bell" style={{ width: "18px", height: "20px" }} />
      </Grid>
      <Grid container item sx={{ textAlign: "left", marginTop: "18px" }}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}
