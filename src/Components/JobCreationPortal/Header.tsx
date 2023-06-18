import { useJobCreationPortalStyles } from "../../Styles/JobCreationPortalStyles";

const JobCreationHeader = () => {
  const { classes } = useJobCreationPortalStyles();
  return (
    <div className={classes.headerContainer}>
      <h2>Create a job</h2>
      <div>
        <p className={classes.secondaryText}>Select Zendex Documents</p>
        <select className={classes.selectOptions}>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};

export default JobCreationHeader;
