import { useJobCreationPortalStyles } from "../../Styles/JobCreationPortalStyles";
import JobCreationHeader from "./Header";

const JobCreationPortal = () => {
  const { classes } = useJobCreationPortalStyles();
  return (
    <div className={classes.mainContainer}>
      <JobCreationHeader />
      
    </div>
  );
};

export default JobCreationPortal;
