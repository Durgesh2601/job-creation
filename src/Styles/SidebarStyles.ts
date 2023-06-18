import { createStyles } from "@mantine/core";

export const useSidebarStyles = createStyles(() => ({
  sidebarContainer: {
    width: "16vw",
    backgroundColor: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    paddingTop: "2rem",
    height: "87vh",
  },
  createJob: {
    backgroundColor: "#f0ecde",
    borderLeft: "5px solid #E4C441",
    cursor: "pointer",
    padding: "0.5rem 1rem",
    width: "80%",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  },
}));
