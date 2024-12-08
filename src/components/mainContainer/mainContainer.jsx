import { Suspense } from "react";
import { Link, Outlet } from "react-router";
import { Flex, Button } from "antd";
import { Notification } from "components";
import styles from "./mainContainer.module.css";

export const MainContainer = () => {
  return (
    <>
      <header className={styles.header}>
        <Flex gap="middle" wrap justify="center">
          <Link to="/">
            <Button color="primary" variant="outlined">
              Main
            </Button>
          </Link>
          <Link to="/events">
            <Button color="primary" variant="outlined">
              Events
            </Button>
          </Link>
        </Flex>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </Suspense>
      <Notification />
    </>
  );
};
