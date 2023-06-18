import { useSectionStyles } from "../../Styles/JobCreationPortalStyles";

const SectionDetails = ({ data }: { data: any }) => {
  const { classes } = useSectionStyles();
  const { title, id, ...fields } = data;
  const display = title === "Documents" ? "flex" : "block";

  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionHeader}>{data?.title}</h2>
      <div className={classes.sectionSubContainer}>
        {Object.keys(fields)?.map((item: any, index) => (
          <div
            className={classes.fieldContainer}
            style={{ display }}
            key={`${id}--${index}`}
          >
            <p
              className={
                title !== "Documents" ? classes.fieldTitle : classes.fieldValue
              }
            >
              {item}
            </p>
            <p
              className={
                title !== "Documents" ? classes.fieldValue : classes.fieldTitle
              }
            >
              {fields?.[item]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionDetails;
