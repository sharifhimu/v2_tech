import React, {useEffect} from 'react';

import './MessageSection.scss';

import {BsPencilSquare} from 'react-icons/bs';
import {MdDateRange} from 'react-icons/md';
import {GoClock} from 'react-icons/go';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {MdCancel} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import {FaCloudUploadAlt} from 'react-icons/fa';
 
import img from '../image/ID.jpg';

import {info} from './MessageSectioninfo';
import { Container } from 'react-bootstrap';

const MessageSection = () => {

    useEffect(() => {

        const realbtn = document.getElementById("real");
        const uploadbtn = document.getElementById("upload-btn");

        uploadbtn.addEventListener("click", function(){
            realbtn.click();
        })
    })

    return (

        
        <div className="msg-sec">

            <div className="msg-sec-bg">
                <p>  Add New Task </p>
                
               
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="p2"> to <span> Assigned Person Name </span> </p>  
                <div className="notificationbar"> 
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                    <div className="circle"> </div>
                 </div> 
                 </div>

            </div>

            <Container style={{ width: '92%' }}>

            <div className="taskname-sec">
            <p> Task Name </p> 

            <div className="taskdesc">
            <BsPencilSquare className="pen-icon "/>

            <p> 
        Adipisicing exercitation nisi sunt magna in commodo nisi incididunt
        proident occaecat est officia. Nisi esse minim veniam sit magna
        aliqua.
            </p>

            </div>      
            </div> 

            <div className="date-time-sec" >

                <div className="taskname-sec"> 
                    <p> Date </p>
                
                    <div className="taskdesc">
            <MdDateRange className="date-icon "/>

            <p> Sun,Sep 26, 2019 </p>       
                </div>
            </div>

            <div className="taskname-sec"> 
                    <p> Time </p>
                
                    <div className="taskdesc">
            <GoClock className="date-icon "/>

            <p> 8:10AM </p>       
                </div>
            </div>

            <div className="taskname-sec"> 
                    <p> Reminder </p>
                
                    <div className="taskdesc">
            <IoMdNotificationsOutline className="date-icon "/>

            <p> On Time </p>       
                </div>
            </div> 
        </div>

        <div className="complete-sec">
        <div className="complete-br"></div>
        <p> 100% complete </p>
        </div>

        <div className="checkbox-sec">
{/* 
        <div className="single-checkbox">
            <input type="checkbox" /> */}
  
  <div style={{ display:'flex', justifyContent: 'space-between' }}>

   <div style={{ float: 'left' }}>   
  <input type="checkbox" id="fruit1" name="fruit-1" value="subtask 1" />
  <label for="fruit1"> Subtask 1 </label>
  </div>
   <div style={{ float: 'right' }}>         
  <AiOutlineClose style={{ color: 'rgba(0,0,0,.2)' ,fontSize: '20px', cursor: 'pointer'  }} />
  </div>
  </div>


  <div style={{ display:'flex', justifyContent: 'space-between' }}>

<div style={{ float: 'left' }}>   
<input type="checkbox" id="fruit2" name="fruit-2" value="subtask 2" />
<label for="fruit2"> Subtask 2 </label>
</div>
<div style={{ float: 'right' }}>         
<AiOutlineClose style={{ color: 'rgba(0,0,0,.2)' ,fontSize: '20px', cursor: 'pointer' }} />
</div>
</div>          





 

            <div className="add-btn"> 
                +Add Subtask
            </div>
        </div>

        <div className="upload-sec">
            <p> Upload Attachment </p>

        <div id="upload-btn" className="upload-space">

            <input type="file" id="real" hidden="true" />

            <p> Drop your attachment here or click to upload </p>

            <FaCloudUploadAlt className="upload-icon"/>
        
        </div>
        <div className="uploaded">
            
            {info.map((i) => {
                return(

                    <div className="single-file">
                <div className="cancel-icon">
                <MdCancel  className="cancel" />
                </div>
                  <img src={i.img} alt="file" className="file-img"/>
                  <p> {i.text} </p>  
            </div>

                )
            })}
        </div>    
        </div>

        <div className="update-btn">

            <a href="/"> <p> Cancel </p> </a>
            <a href="/"> <p> Update </p> </a>    
        </div>

        </Container>

        </div>

    );
};

export default MessageSection;