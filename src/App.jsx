import React, { useState, useEffect } from 'react'; 
import './App.css'
import Grid from '@mui/material/Grid';
import Links from "./links";
import Title from "./TitleComp";
import Button from "./Button";
import rats from "./assets/ratsratswearetherats.png";
import black from "./assets/inumrhaf.jfif";
import pinku from "./assets/yep.png";
document.body.style.backgroundColor =" #6560FF";
import neko from "./assets/Neko atsume Original BGM.mp3";
import roach from "./assets/roach.gif";


export default function App() {
  const linksTwo = [
    {link: "/AboutMe", title: " About |" },
    {link: "/", title: " Home |" },
    {link: "/Consp1", title: " YOU AREN'T REAL |"},
    {link : "/Consp2", title:" Your Fridge is Running |"}

  ];


  function play(){
    new Audio(neko).play()
  }
  return (
    <main>



      <Links
        imageSrc = {black}
        links={linksTwo}
      /> 


      <Title
        imageSrc = {pinku}
        text="WELCOME TO CONSIPARCYESI OR SOMETHING"
      />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >


        <Button
          onClick = {play}
          text = "Groovy Times"

          />


         <Grid item xs={4}>
           <font className = "jibbity" color="#FF0374"><p className ="Rob">I have been trying to write, a website for you, some things I just can't do, coast to coast alone.</p></font>
         </Grid>


        <Grid item xs={2}>

        <font className = "jibbity" color="#FF0374"><p className = "Rob">From coast to cost like butter and toast, Welcome to Quinns marvelous technical website.</p> </font>
          <img className = "mewmew" src = {roach}/>
        </Grid>
    </Grid>







    </main>
  )
}