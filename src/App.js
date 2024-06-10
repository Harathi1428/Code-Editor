
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [Hdata,setHdata]=useState("");
  const [Cdata,setCdata]=useState("");
  const [Jdata,setJdata]=useState("");
  const [Outdata,setOutdata]=useState("");


  const htmldata=(e)=>{
    setHdata(e.target.value);
  }
  const Cssdata=(e)=>{
    setCdata(e.target.value);
  }
  const Jsdata=(e)=>{
    setJdata(e.target.value);
  }
  useEffect(()=>{
    setTimeout(()=>{
      setOutdata(`<html>${Hdata}</html>
      <style>${Cdata}</style>
      <script>${Jdata}</script>`)
    },250)
  },[Hdata,Cdata,Jdata])
  

  console.log(Hdata,Cdata,Jdata)
  
  return (
    <div class="container">
        <div class="left">
        <div class="dd">
          <label><i class="fa-brands fa-html5"></i>HTML</label>
          <textarea class="html-area" onChange={htmldata} value={Hdata}></textarea>
          </div>
          <div class="dd">
          <label><i class="fa-brands fa-css3-alt"></i>CSS</label>
          <textarea class="css-area" onChange={Cssdata} value={Cdata}></textarea>
          </div>
          <div class="dd">
          <label><i class="fa-brands fa-js"></i>JavaScript</label>
          <textarea class="js-area" onChange={Jsdata} value={Jdata}></textarea>
          </div>
        </div>
        <div class="right">
          <label><i class="fa-solid fa-play"></i>OUTPUT</label>
          <iframe class="output" srcDoc={Outdata}></iframe>
        </div>
      </div>
  );
}

export default App;
