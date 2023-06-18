import { createStyles } from "@mantine/core";
export const useNavbarStyles = createStyles(() => ({
  navbar: {
    height: "5rem",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: "0",
    padding: "1rem",
    background: "white",
  },
  mainlogo: {
    height: "3rem",
  },
  profileSection: {
    display: "flex",
    gap: "2rem",
    height: "75%",
    paddingRight: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "75%",
    height: "100%",
    paddingLeft: "1rem",
  },
  searchIcon: {
    width: "40%",
  },
  iconContainer: {
    border: "0.25px solid #808080",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    width: "10%",
  },
  bellIcon: {
    width: "40%",
  },
  userProfile: {
    padding: "0 1rem",
    height: "100%",
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  userImage: {
    height: "100%",
  },
  userNameContainer: {
    height: "50%",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  userName: {
    border: "none",
  },
  extraText: {
    height: "50%",
    fontSize: "0.75rem",
    color: "#808080",
    marginLeft: "0.2rem",
  },
}));
