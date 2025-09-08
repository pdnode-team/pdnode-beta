"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home';

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" sizes={"128x128"} href="/favicon.ico" />
      </Head>
      <title>PdNode Beta - All beta projects are in here</title>
      <div className={"navi-bar"}>
        <Stack>
          <Button href="/" sx={{background:"#a4c7d3", marginLeft:"13px", marginTop:"13px", borderRadius:"16px", height:"63px", width:"200px"}}>
            <Image alt={"PD Node Beta Icon"} src={"/pdnode-beta-icon-light.png"} width={160} height={160}/>
          </Button>
          <Stack direction="row" spacing={2}>
            <Button href="/"><HomeIcon/></Button>
          </Stack>
        </Stack>
      </div>
    </React.Fragment>
  );
}
