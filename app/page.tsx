"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import "./globals-light.css";
import * as React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { IoLogoGithub } from "react-icons/io";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

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
      <title>PdNode Beta - All our beta projects are here</title>
        <Stack direction={"row"} spacing={5} className={"navi-bar"}>
          <div>
            <Button href="/" sx={{background:"rgb(142 77 47)", marginLeft:"13px", marginTop:"13px", borderRadius:"16px", height:"63px", width:"200px"}}>
              <Image alt={"PD Node Beta Icon"} src={"/pdnode-beta-icon-dark.png"} width={160} height={160}/>
            </Button>
          </div>
          <div>
            <Stack direction="row" spacing={2.5} sx={{marginTop:"20px", alignItems:"center"}}>
              <Stack sx={{alignItems:"center"}}>
                <Button href="/" sx={{background:"rgb(119 87 74)", borderRadius:"100px", height:"32px", width:"45px"}}><HomeIcon sx={{color:"#fefbff"}}/></Button>
                <Link href="/" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(35 26 22)", fontSize:"0.85rem", fontWeight:"500"}}>Home</Typography>
                </Link>
              </Stack>
              <Stack sx={{alignItems:"center", justifyItems:"center"}}>
                <Button href="/projects" sx={{background:"none", borderRadius:"100px", height:"32px", width:"45px"}}><AppsRoundedIcon sx={{color:"rgb(108,108,108)"}}/></Button>
                <Link href="/projects" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(108,108,108)", fontSize:"0.85rem", fontWeight:"500"}}>Projects</Typography>
                </Link>
              </Stack>
              <Stack sx={{alignItems:"center", justifyItems:"center"}}>
                <Button href="/about" sx={{background:"none", borderRadius:"100px", height:"32px", width:"45px"}}><InfoIcon sx={{color:"rgb(108,108,108)"}}/></Button>
                <Link href="/abou" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(108 108 108)", fontSize:"0.85rem", fontWeight:"500"}}>About Us</Typography>
                </Link>
              </Stack>
            </Stack>
          </div>
          <div>
            <Stack sx={{alignItems:"center", justifyItems:"center", marginRight:"0px"}}>
              <Tooltip title="Visit our GitHub">
                <IconButton href="https://github.com/pdnode-team" sx={{background:"none", outline:"#555555FF solid 1px", borderRadius:"100px"}}><IoLogoGithub style={{color:"rgb(108,108,108)", fontSize:"2rem"}}/></IconButton>
              </Tooltip>
            </Stack>
          </div>
        </Stack>
    </React.Fragment>
  );
}

{/*unselected button color: rgb(133 115 108)*/}
