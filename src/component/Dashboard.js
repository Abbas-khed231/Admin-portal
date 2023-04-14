import * as React from "react";
import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { AttachMoney, Group, List } from "@mui/icons-material";
import Card from "../common/Card";
// import Graph from "./graph";

import { apis } from '../services/api'

function Dashboard() {
  const [stockList, setStockList] = React.useState([]);

  React.useEffect(() => {
      apis.getExchangeList().then(res => setStockList(res))
  }, [])


  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Card 
          title={"BUDGET"} 
          subtitle={"Since last month"} 
          percent={12} 
          money={"24k"} 
          renderIcon={ <AttachMoney style={{fontSize:"3rem",backgroundColor: "red", borderRadius: "50%",color: "white"}}/>}
          />
        </Grid>
        <Grid item>
          <Card
            title={"TOTAL CUSTOMERS"}
            subtitle={"Since last month"}
            percent={16}
            money={"1.6k"}
            renderIcon={ <Group style={{fontSize:"3rem",backgroundColor: "rgb(16, 185, 129)", borderRadius: "50%",color: "white"}}/>}
          />
        </Grid>
        <Grid item>
          <Card 
          title={"TASK PROGRESS"} 
          subtitle={''}
          money={"75.5%"} 
          renderIcon={ <List style={{fontSize:"3rem",backgroundColor: "rgb(247, 144, 9)", borderRadius: "50%",color: "white"}}/>}
          />
        </Grid>
        <Grid item>
          <Card 
          title={"TOTAL PROFIT"} 
          subtitle={''}
          renderIcon={<AttachMoney style={{fontSize:"3rem",backgroundColor: "blue", borderRadius: "50%",color: "white"}}/>}
          money={"$15K"} />
        </Grid>

      </Grid>
      <Grid container>
        <Table size="large">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Timezone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              stockList.map((sL, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{sL.name}</TableCell>
                    <TableCell>{sL.code}</TableCell>
                    <TableCell>{sL.country}</TableCell>
                    <TableCell>{sL.timezone}</TableCell>
                  </TableRow>
                )
              })
              }
          </TableBody>
        </Table>
      </Grid>
    </>
  );
}

export default Dashboard;
