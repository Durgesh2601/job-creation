import { useSidebarStyles } from "../../Styles/SidebarStyles";

const SideBar = () => {
  const { classes } = useSidebarStyles();
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.createJob}>
        <p>Create a job</p>
      </div>
    </div>
  );
};

export default SideBar;
