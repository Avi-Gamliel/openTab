import React, { useEffect, useState, useRef } from "react";

const Iframe = ({src}) => {


    const iframe = useRef()
    const [bloState, setBlobstate] = useState()
  
    useEffect(() => {
  
      const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
  
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize),
            byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
  
          byteArrays.push(byteArray);
        }
  
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
      }
  
  
      const contentType = "application/pdf",
        blob = b64toBlob(src, contentType),
        blobUrl = URL.createObjectURL(blob);
      setBlobstate(blobUrl)
    }, [])
  
  
    const print = () => {
      iframe.current.focus()
      iframe.current.contentWindow.print()
    }

    return (
        <>
            <iframe
                ref={iframe}
                style={{ display: 'none' }}
                src={bloState}></iframe>
            <button onClick={() => print()}>print</button>
        </>
    )
}

export default Iframe;