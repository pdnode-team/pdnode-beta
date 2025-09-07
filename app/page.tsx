"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
          <link rel="icon" sizes={"128x128"} href="/public/favicon.ico" />
      </Head>
      <title>PdNode Beta</title>
      <div className={"navi-bar"}>
        <Button><Image alt={"PD Node Beta Icon"} src={"next.svg"} width={50} height={50}/></Button>
      </div>
    </React.Fragment>
  );
}
