import Grid from "@mui/material/Grid";

import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AllInboxIcon from "@mui/icons-material/AllInbox";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DashboardAccordion from "../DashboardAccordian/DashbaordAccordian";
import { BarChart } from "../BarChart/BarChart";
import Countup from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="w-full">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Stack
            direction="row"
            sx={{
              columnGap: ".5rem",
              rowGap: "1rem",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Card
              sx={{ minWidth: "49%", padding: "1rem", height: 220 }}
              className="gradient-blue"
            >
              <CardContent sx={{ color: "white" }}>
                <PaymentIcon fontSize="large" />
                <Typography gutterBottom variant="h4" component="div">
                  $<Countup end={900} duration={4} delay={0.6} />
                </Typography>
                <Typography variant="body" component="div">
                  Total Earnings
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: "49%",
                padding: "1rem",
                height: 220,
              }}
              className="gradient-green"
            >
              <CardContent sx={{ color: "white" }}>
                <ShoppingBagIcon fontSize="large" />
                <Typography gutterBottom variant="h4" component="div">
                  $<Countup end={500} duration={4} delay={0.6} />
                </Typography>
                <Typography variant="body">Total Orders</Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid item md={4} xs={12}>
          <Stack
            direction="column"
            sx={{
              rowGap: "1rem",
              flexGrow: 1,
            }}
          >
            <Card
              sx={{
                width: "100%",
              }}
              className="gradient-green"
            >
              <CardContent sx={{ color: "white" }}>
                <div className="right-card">
                  <div className="right-icons">
                    <AllInboxIcon />
                  </div>
                  <div className="right-text">
                    <Typography gutterBottom variant="h6" component="div">
                      203K
                    </Typography>
                    <Typography variant="body">Total Income</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "100%",
              }}
            >
              <CardContent>
                <div className="right-card">
                  <div className="right-icons">
                    <AllInboxIcon />
                  </div>
                  <div className="right-text">
                    <Typography gutterBottom variant="h6" component="div">
                      240K
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                      Total Income
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              minWidth: "49%",
              minHeight: "49vh",
              padding: ".75rem .5rem .5rem .5rem",
            }}
          >
            <BarChart />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{ minWidth: "49%", minHeight: "49vh", padding: "1rem 1rem " }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginBottom: ".5rem" }}
            >
              Recent Sales
            </Typography>
            <DashboardAccordion />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
