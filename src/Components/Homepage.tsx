import { HomePageStyles } from "../Styles/homeStyles";

const HomePage = () => {
  const { classes } = HomePageStyles();

  return (
    <div className={classes.container}>
      <h1>Hello World</h1>
    </div>
  );
};

export default HomePage;
