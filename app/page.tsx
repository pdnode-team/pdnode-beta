"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from "next/image";
import Head from "next/head";
import {auto} from "@popperjs/core";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" sizes={"128x128"} href="/public/favicon.ico" />
      </Head>
      <title>PdNode Beta</title>
      <div className={"navi-bar"}>
        <Button sx={{background:"#a4c7d3", marginLeft:"13px", marginTop:"13px", borderRadius:"16px", height:"63px", width:"200px"}}>
          <Image alt={"PD Node Beta Icon"} src={"/pdnode-beta-icon1.png"} width={160} height={160}/>
        </Button>
      </div>
    </React.Fragment>
  );
}
