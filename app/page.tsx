"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import "./globals-light.css";
import * as React from "react";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import HomeIcon from '@mui/icons-material/Home';

import Image from "next/image";
import Head from "next/head";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" sizes={"128x128"} href="/favicon.ico" />
      </Head>
      <title>PdNode Beta - All beta projects are in here</title>
        <Stack direction={"row"} spacing={5} className={"navi-bar"}>
          <div>
            <Button href="/" sx={{background:"rgb(142 77 47)", marginLeft:"13px", marginTop:"13px", borderRadius:"16px", height:"63px", width:"200px"}}>
              <Image alt={"PD Node Beta Icon"} src={"/pdnode-beta-icon-dark.png"} width={160} height={160}/>
            </Button>
          </div>
          <div>
            <Stack direction="row" spacing={3} sx={{marginTop:"20px", alignItems:"center"}}>
              <Stack sx={{alignItems:"center"}}>
                <Button href="/" sx={{background:"rgb(119 87 74)", borderRadius:"100px", height:"32px", width:"45px"}}><HomeIcon sx={{color:"#fefbff"}}/></Button>
                <Link href="/" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(35 26 22)", fontSize:"0.85rem", fontWeight:"500"}}>Home</Typography>
                </Link>
              </Stack>
              <Stack sx={{justifyItems:"center"}}>
                <Button href="/" sx={{background:"rgb(83 68 61)", borderRadius:"100px", height:"32px", width:"45px"}}><HomeIcon sx={{color:"#fefbff"}}/></Button>
                {/*
                <Link href="/" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(35 26 22)", fontSize:"0.85rem", fontWeight:"500"}}>Home</Typography>
                </Link>
                */}
              </Stack>
            </Stack>
          </div>
        </Stack>
    </React.Fragment>
  );
}
