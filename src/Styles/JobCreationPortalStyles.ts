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
    border: "1px solid transparent",
    width: "100%",
    height: "100%",
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
}));
