import { TextInput, TextInputProps } from "@mantine/core";
import { useNavbarStyles } from "../../Styles/NavbarStyles";
import MainLogo from "../../assets/main_logo.svg";
import SearchIcon from "../../assets/search_icon.svg";
import BellIcon from "../../assets/bell_icon.svg";
import UserImage from "../../assets/avtar.svg";

const Navbar = (props: TextInputProps) => {
  const { classes } = useNavbarStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.mainlogo}>
        <img width={"100%"} height={"100%"} src={MainLogo} alt="main-logo" />
      </div>
      <div className={classes.profileSection}>
        <div className={classes.searchContainer}>
          <TextInput
            icon={<img src={SearchIcon} className={classes.searchIcon} />}
            radius="md"
            size="md"
            placeholder="Search"
            rightSectionWidth={42}
            {...props}
          />
        </div>
        <div className={classes.iconContainer}>
          <img src={BellIcon} alt="bell-icon" className={classes.bellIcon} />
        </div>
        <div className={classes.userProfile}>
          <img
            width={"100%"}
            height={"100%"}
            src={UserImage}
            alt="user-profile-image"
          />
          <div>
            <div className={classes.userNameContainer}>
              <select className={classes.userName}>
                <option value="John Deo">John Deo</option>
              </select>
            </div>
            <div className={classes.extraText}>Server</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
