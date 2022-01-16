import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Switch,
  Toolbar,
  Typography
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Head from "next/head";
import NextLink from "next/link";
import { useThemeContext } from "../store/context/theme_context";
import useStyles from "../utils/styles";

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactChild | React.ReactChild[];
};

const Layout = ({ children, description, title }: LayoutProps) => {
  const { darkMode, darkModeHandler } = useThemeContext();

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: 40,
        fontWeight: 400,
        margin: "1rem 0"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0"
      }
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000"
      },
      secondary: {
        main: "#208000"
      }
    }
  });
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name='description' content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className={classes.navbar} position='static'>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
              <NextLink href='/cart' passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href='/login' passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>
          All rights reserved &copy;{new Date().getFullYear()} Next Amazona
        </Typography>
      </footer>
    </>
  );
};

export default Layout;
