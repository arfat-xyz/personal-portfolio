import {
  NotFound_Container,
  NotFound_Link,
  NotFound_h1,
  NotFound_p,
} from "@/styles/404Styles";
import React from "react";

const NotFound = () => {
  return (
    <>
      <NotFound_Container>
        <NotFound_h1 title="Arfatur Rahman Not Found page">404</NotFound_h1>
        <NotFound_p>NOT FOUND</NotFound_p>
        <NotFound_Link href={"/"}>HOME</NotFound_Link>
      </NotFound_Container>
    </>
  );
};

export default NotFound;
