import { useJobCreationPortalStyles } from "../../Styles/JobCreationPortalStyles";

const SectionDetails = () => {
  const { classes } = useJobCreationPortalStyles();
  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionHeader}>Company</h2>
      <div className={classes.sectionSubContainer}>

      </div>
    </div>
  );
};

export default SectionDetails;
