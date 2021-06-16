import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import useStyles from "../static/bgStyles";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <h1 className="title-spacer m-0">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
