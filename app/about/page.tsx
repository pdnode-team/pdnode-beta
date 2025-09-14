"use client"; //DO NOT TOUCH THIS OR THE WHOLE PROJECT WILL BE MESSED UP

import "../globals-light.css";
import * as React from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { IoLogoGithub } from "react-icons/io";
import LanguageIcon from '@mui/icons-material/Language';
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
      <div>
        <Stack direction={"row"} spacing={"2.5vw"} className={"navi-bar"}>
          <div>
            <Button href="/" sx={{background:"rgb(142 77 47)", marginLeft:"13px", marginTop:"13px", borderRadius:"16px", height:"63px", width:"200px"}}>
              <Image alt={"PD Node Beta Icon"} src={"/pdnode-beta-icon-dark.png"} width={160} height={160}/>
            </Button>
          </div>
          <div>
            <Stack direction="row" spacing={"1vw"} sx={{marginTop:"20px", alignItems:"center"}}>
              <Stack sx={{alignItems:"center"}}>
                <Button href="/"
                        sx={{background:"none",
                          borderRadius:"100px",
                          height:"32px",
                          width:"45px",
                          color:"rgb(108,108,108)",
                          '&:hover': {
                            background: "rgb(170,155,150)",
                            color: "rgb(35 26 22)",
                          },
                          transition: 'background-color 0.3s ease, color 0.3s ease'
                }}>
                  <HomeIcon/>
                </Button>
                <Link href="/" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(108 108 108)", fontSize:"0.85rem", fontWeight:"500"}}>Home</Typography>
                </Link>
              </Stack>
              <Stack sx={{alignItems:"center", justifyItems:"center"}}>
                <Button href="/projects"
                        sx={{background:"none",
                          borderRadius:"100px",
                          height:"32px",
                          width:"45px",
                          color:"rgb(108,108,108)",
                          '&:hover': {
                            background: "rgb(170,155,150)",
                            color: "rgb(35 26 22)",
                          },
                          transition: 'background-color 0.3s ease, color 0.3s ease'
                }}>
                  <AppsRoundedIcon/>
                </Button>
                <Link href="/projects" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(108,108,108)", fontSize:"0.85rem", fontWeight:"500"}}>Projects</Typography>
                </Link>
              </Stack>
              <Stack sx={{alignItems:"center", justifyItems:"center"}}>
                <Button href="/about" sx={{background:"rgb(119 87 74)", borderRadius:"100px", height:"32px", width:"45px"}}><InfoIcon sx={{color:"#fefbff"}}/></Button>
                <Link href="/about" sx={{textDecoration:"none"}}>
                  <Typography sx={{color:"rgb(35 26 22)", fontSize:"0.85rem", fontWeight:"500"}}>About Us</Typography>
                </Link>
              </Stack>
            </Stack>
          </div>
          <div style={{width:"1006px"}}></div>
          <Stack spacing={1.7} direction={"row"}>
            <Stack sx={{justifyItems:"center", alignItems:"center", justifyContent:"center"}}>
              <Tooltip title="Visit Main Website">
                <IconButton href="https://www.pdnode.com" target="_blank" sx={{background:"none", outline:"#555555FF solid 1px", borderRadius:"100px", width:"3rem", height:"3rem"}}><LanguageIcon sx={{color:"rgb(108,108,108)", fontSize:"1.7rem"}}/></IconButton>
              </Tooltip>
            </Stack>
            <Stack sx={{justifyItems:"center", alignItems:"center", justifyContent:"center"}}>
              <Tooltip title="Visit our GitHub">
                <IconButton href="https://github.com/pdnode-team" target="_blank" sx={{background:"none", outline:"#555555FF solid 1px", borderRadius:"100px", width:"3rem", height:"3rem"}}><IoLogoGithub style={{color:"rgb(108,108,108)", fontSize:"1.7rem"}}/></IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>
      </div>
      <div>
        <div className="about-div-long">
          <Typography variant={"h2"} sx={{color:"#303030", fontWeight:"400", marginLeft:"50px"}}>About Us</Typography>
          <Typography variant={"h6"} sx={{color:"#303030", fontWeight:"400", marginLeft:"50px"}}>Pdnode is a group of people with the same interests. Founded on 2024-07-10.</Typography>
        </div>
      </div>
      <footer style={{position:"fixed", bottom:"10px", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Typography sx={{fontSize:"0.88rem", color:"gray"}}>v60 | © 2025 PdNode. All Rights Reserved. · <Link href="https://forum.pdnode.com/d/5-pdnode-terms-of-service">Terms</Link> · <Link href="https://forum.pdnode.com/d/5-pdnode-terms-of-service">Privacy</Link></Typography>
      </footer>
    </React.Fragment>
  );
}

