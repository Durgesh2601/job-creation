import JobCreationPortal from "../Components/JobCreationPortal";
import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/Sidebar/Sidebar";
import { useHomePageStyles } from "../Styles/HomepageStyles";

const HomePage = () => {
  const { classes } = useHomePageStyles();
  return (
    <>
      <Navbar />
      <div className={classes.mainContainer}>
        <SideBar />
        <JobCreationPortal />
      </div>
    </>
  );
};

export default HomePage;
