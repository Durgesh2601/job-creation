import { useSectionStyles } from "../../Styles/JobCreationPortalStyles";

const SectionDetails = ({ data }: { data: any }) => {
  const { title, id, ...fields } = data;
  const display = title === "Documents" ? "flex" : "block";
  const { classes } = useSectionStyles();

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
            <p className={classes.fieldTitle}>{item}</p>
            <p className={classes.fieldValue}>{fields?.[item]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionDetails;
