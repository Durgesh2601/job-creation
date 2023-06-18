import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/Sidebar/Sidebar";
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
