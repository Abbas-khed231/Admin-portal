import { ArrowUpward } from "@mui/icons-material";
import { Paper, Typography, Grid } from "@mui/material";

function Card(props){
    return (
      <Grid item>
        <Paper style={{ padding: "2.5rem 2rem", borderRadius:"16px"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <div>
                <Typography style={{color:"rgb(108, 115, 127)"}}>{props.title}</Typography>
                <Typography style={{fontWeight:"700", fontSize:"2rem", margin:"8px 0 0"}}>{props.money}</Typography>
              </div>
              <div>
               {props.renderIcon}
              </div>
            </div>
            <div style={{display:"flex", marginTop:"16px"}}>
                <ArrowUpward style={{color:"rgb(16, 185, 129)"}}></ArrowUpward>
                <Typography style={{color:"rgb(16, 185, 129)"}}>{props.percent}%</Typography>
                <Typography style={{marginLeft:"16px", color:"rgb(108, 115, 127)"}}>{props.subtitle}</Typography>
            </div>
        </Paper>
      </Grid>
    )
}

export default Card;