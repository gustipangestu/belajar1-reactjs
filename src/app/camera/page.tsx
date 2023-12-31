"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";



const CustomCam = () =>{

    const videoConstraints = {
        width: 720,
        height: 360,
        facingMode: "user"
      };
    
    const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
      const webcamRef = useRef<Webcam>(null);
      const [url, setUrl] = useState<string | null>(null);
       const [status, setStatus] =useState<string>("");
      const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
          setUrl(imageSrc);
        }
      }, [webcamRef]);

      const setStatusCamera=()=>{
        if(isCaptureEnable==true){
            setStatus("kamera nyala");
        }
        else{
            setStatus("kamera mati");
        }
      }
      
    //   load function diawal
      useEffect(()=>{
        setStatusCamera();
      });

    return(
        <>
      <header>
        <h1>camera app</h1>
      </header>
      
        <h2>{status}</h2>
      {isCaptureEnable || (
        <button onClick={() => setCaptureEnable(true)}>start</button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>end </button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
      
    );
}


export default CustomCam;