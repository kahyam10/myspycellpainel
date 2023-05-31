import React, { ReactNode } from "react";
import Head from "next/head";
import HeaderLayout from "./headerLayout";
import FooterLayout from "./footerLayout";
import { Flex } from "@chakra-ui/core";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "MySpyCell - Monitoramento de Celulares",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <HeaderLayout />
    <Flex width="100%" margin={0} padding={0} paddingTop={20} flexDir="column" minHeight="100vh">
      {children}
    </Flex>
    <FooterLayout />
  </div>
);

export default Layout;
