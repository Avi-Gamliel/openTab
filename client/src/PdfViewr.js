import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
const PdfViewer = ({base64}) => {
    const [result, setResult] = useState()
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await axios.get('api/list')
    //         setResult(res)
    //     }

    //     return () => {

    //     }
    // }, [])

    const click = () => {
        window.open(window.location.origin + "/list", '_blank', 'toolbar=0,location=0,menubar=0');
    }

    return (
        <div style={{ width: 500, height: 500, background: 'red' }}>
            <span>{base64}</span>
            {/* <Link to="/list" target="_blank" rel="noopener noreferrer" >move </Link> */}
            <button onClick={() => click()}>click</button>
            <div>

            </div>
        </div>
    )
}

export default PdfViewer;