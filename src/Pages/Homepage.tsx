import Navbar from "../Components/Navbar";
import SideBar from "../Components/Sidebar";
import { useHomePageStyles } from "../Styles/HomepageStyles";

const HomePage = () => {
  const { classes } = useHomePageStyles();
  return (
    <div className={classes.mainContainer}>
      <Navbar />
      <SideBar />
    </div>
  );
};

export default HomePage;
