import { useJobCreationPortalStyles } from "../../Styles/JobCreationPortalStyles";
import JobCreationHeader from "./Header";
import SectionDetails from "./SectionDeatils";

const JobCreationPortal = () => {
  const { classes } = useJobCreationPortalStyles();
  return (
    <div className={classes.mainContainer}>
      <JobCreationHeader />
      <SectionDetails />
    </div>
  );
};

export default JobCreationPortal;
