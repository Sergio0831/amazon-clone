import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography
} from "@material-ui/core";
import Head from "next/head";
import NextLink from "next/link";
import useStyles from "../utils/styles";

type LayoutProps = {
  children: React.ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar className={classes.navbar} position='static'>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href='/cart' passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
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