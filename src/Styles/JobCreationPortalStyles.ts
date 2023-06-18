import { createStyles } from "@mantine/core";

export const useJobCreationPortalStyles = createStyles(() => ({
  mainContainer: {
    width: "100%",
    borderRadius: "1rem",
    backgroundColor: "white",
    overflow: "auto",
    marginTop: "1rem",
    padding: "2rem",
  },
  headerContainer: {
    width: "100%",
  },
  secondaryText: {
    color: "#ADADAD",
    lineHeight: "1rem",
    fontSize: "0.8rem",
    marginTop: "0.7rem",
  },
  selectOptions: {
    width: "21rem",
    border: "2px solid #E0E0E0",
    borderRadius: "0.6rem",
    padding: "10px 0",
    marginTop: "0.7rem",
  },
  sectionMainContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
}));

export const useSectionStyles = createStyles((display: any) => ({
  sectionContainer: {
    width: "40%",
    marginTop: "1rem",
    minHeight: "10vh",
  },
  sectionHeader: {
    paddingLeft: "3px",
  },
  sectionSubContainer: {
    border: "2px solid #E0E0E0",
    width: "100%",
    marginTop: "1rem",
    borderRadius: "0.6rem",
    padding: "1.5rem",
  },
  fieldContainer: {
    display: display,
    flexWrap: "wrap",
    gap: "5rem",
    alignItems: "center",
  },
  fieldTitle: {
    color: "#ADADAD",
    fontSize: "0.8rem",
    lineHeight: "2rem",
  },
  fieldValue: {
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
}));
