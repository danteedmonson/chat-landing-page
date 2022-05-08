import Button from '@mui/material/Button';
import { css, jsx } from '@emotion/react';
import { AnySoaRecord } from 'dns';
import Image from 'next/image';


export default function Header () {

        const buttonStyle:any = {fontFamily:"'Somatic', sans-serif", textTransform:"none", color:"white", fontSize:12, cursor:"pointer", borderRadius:16}
        const leftContainer:any = {display:"flex", justifyContent:"space-between", alignItems:"center", width:"53%"}
        const rightContainer:any = {display:"flex", justifyContent:"space-between", alignItems:"center", width:"20%"}
        
    

    return(
        <div style={{display:"flex", justifyContent:"center", width:"99%"}}>
        <div
            style={{
                width:"100%",
                maxWidth:940,
                height:"70px",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                position:"fixed",
                top:0,
              
                padding:"0px 40px",
                zIndex:1,
                fontFamily:"'Somatic', sans-serif !important",
              
            }}>
                <div style={leftContainer}>
                
                    <Image alt="" src="/images/logo.svg" width={60} height={60} ></Image>
                <Button style={buttonStyle}>
                    Download
                </Button>
                <Button style={buttonStyle}>
                    Safety
                </Button >
                <Button style={buttonStyle}>
                    Support
                </Button>
                <Button style={buttonStyle}>
                    About
                </Button>
                </div>
                <div  style={rightContainer}>
                <Button style={buttonStyle}>
                    Sign In
                </Button>
                <Button variant="contained" style={{...buttonStyle, backgroundColor:"#FA7268"}}>
                    Sign Up
                </Button >
                </div>
        
        </div>
        </div>
    )
}

