import React from "react";
import './../Components/Component Style/content.style.css'
function Content() {

    let Emailfun = () => {

    }

    return (
        <div className='contant'>
            <header className='contant-head'>
                <h1>Contant us</h1>
                <span>Don`t be shy , ask the CheekSquad</span>
            </header>
            <div className='main-contant'>
                <div className='part-contant'>
                    <span className='part-contant-span'>Drop us a line</span>
                    <a href='mailto: 1farzinhamzei@gmail.com'><button className='btn email-btn' >Send a email</button></a>


                </div>
                <div className='part-contant'>
                    <span className='part-contant-span'>Text us</span>
                  <a href='tel:09187997434' ><button className='btn text-btn'>Text</button></a>

                </div>
                <div className='part-contant'>
                    <span className='part-contant-span'>Tweet us</span>
                    <a href='https://twitter.com/xalvinx_' target='_blank'><button className='btn tweet-btn'>Tweet</button></a>
                </div>

                <img className='email-icon' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-email-interface-kiranshastry-solid-kiranshastry.png"/>

                <img className='massage-icon' src="https://img.icons8.com/material/65/000000/sms--v1.png"/>

                <img className='twitter-icon' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDUwLjA2MjUgMTAuNDM3NSBDIDQ4LjIxNDg0NCAxMS4yNTc4MTMgNDYuMjM0Mzc1IDExLjgwODU5NCA0NC4xNTIzNDQgMTIuMDU4NTk0IEMgNDYuMjc3MzQ0IDEwLjc4NTE1NiA0Ny45MTAxNTYgOC43Njk1MzEgNDguNjc1NzgxIDYuMzcxMDk0IEMgNDYuNjkxNDA2IDcuNTQ2ODc1IDQ0LjQ4NDM3NSA4LjQwMjM0NCA0Mi4xNDQ1MzEgOC44NjMyODEgQyA0MC4yNjk1MzEgNi44NjMyODEgMzcuNTk3NjU2IDUuNjE3MTg4IDM0LjY0MDYyNSA1LjYxNzE4OCBDIDI4Ljk2MDkzOCA1LjYxNzE4OCAyNC4zNTU0NjkgMTAuMjE4NzUgMjQuMzU1NDY5IDE1Ljg5ODQzOCBDIDI0LjM1NTQ2OSAxNi43MDMxMjUgMjQuNDQ5MjE5IDE3LjQ4ODI4MSAyNC42MjUgMTguMjQyMTg4IEMgMTYuMDc4MTI1IDE3LjgxMjUgOC41MDM5MDYgMTMuNzE4NzUgMy40Mjk2ODggNy40OTYwOTQgQyAyLjU0Mjk2OSA5LjAxOTUzMSAyLjAzOTA2MyAxMC43ODUxNTYgMi4wMzkwNjMgMTIuNjY3OTY5IEMgMi4wMzkwNjMgMTYuMjM0Mzc1IDMuODUxNTYzIDE5LjM4MjgxMyA2LjYxMzI4MSAyMS4yMzA0NjkgQyA0LjkyNTc4MSAyMS4xNzU3ODEgMy4zMzk4NDQgMjAuNzEwOTM4IDEuOTUzMTI1IDE5Ljk0MTQwNiBDIDEuOTUzMTI1IDE5Ljk4NDM3NSAxLjk1MzEyNSAyMC4wMjczNDQgMS45NTMxMjUgMjAuMDcwMzEzIEMgMS45NTMxMjUgMjUuMDU0Njg4IDUuNSAyOS4yMDcwMzEgMTAuMTk5MjE5IDMwLjE1NjI1IEMgOS4zMzk4NDQgMzAuMzkwNjI1IDguNDI5Njg4IDMwLjUxNTYyNSA3LjQ5MjE4OCAzMC41MTU2MjUgQyA2LjgyODEyNSAzMC41MTU2MjUgNi4xODM1OTQgMzAuNDUzMTI1IDUuNTU0Njg4IDMwLjMyODEyNSBDIDYuODY3MTg4IDM0LjQxMDE1NiAxMC42NjQwNjMgMzcuMzkwNjI1IDE1LjE2MDE1NiAzNy40NzI2NTYgQyAxMS42NDQ1MzEgNDAuMjMwNDY5IDcuMjEwOTM4IDQxLjg3MTA5NCAyLjM5MDYyNSA0MS44NzEwOTQgQyAxLjU1ODU5NCA0MS44NzEwOTQgMC43NDIxODggNDEuODI0MjE5IC0wLjA1ODU5MzggNDEuNzI2NTYzIEMgNC40ODgyODEgNDQuNjQ4NDM4IDkuODk0NTMxIDQ2LjM0NzY1NiAxNS43MDMxMjUgNDYuMzQ3NjU2IEMgMzQuNjE3MTg4IDQ2LjM0NzY1NiA0NC45NjA5MzggMzAuNjc5Njg4IDQ0Ljk2MDkzOCAxNy4wOTM3NSBDIDQ0Ljk2MDkzOCAxNi42NDg0MzggNDQuOTQ5MjE5IDE2LjE5OTIxOSA0NC45MzM1OTQgMTUuNzYxNzE5IEMgNDYuOTQxNDA2IDE0LjMxMjUgNDguNjgzNTk0IDEyLjUgNTAuMDYyNSAxMC40Mzc1IFoiPjwvcGF0aD48L3N2Zz4="/>

            </div>
        </div>
    )
}


export default Content