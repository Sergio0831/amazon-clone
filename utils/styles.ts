import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10
    }
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  grow: {
    flexGrow: 1
  },
  main: {
    minHeight: "80vh"
  },
  section: {
    margin: "10px 0"
  },
  footer: {
    height: 70,
    display: "grid",
    placeItems: "center"
  }
});

export default useStyles;
