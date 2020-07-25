import React from 'react';

import './NameSection.scss';
import image from '../image/ID.jpg';
import {BsCircleFill} from 'react-icons/bs';
import {AiOutlineAppstore} from 'react-icons/ai';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {AiFillClockCircle} from 'react-icons/ai';
import {AiOutlineBars} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import {FiPaperclip} from 'react-icons/fi';
import {IoIosCheckmarkCircle} from 'react-icons/io';

// import one from '../image/text-msg-sec/one.jpg';

import {firstInfo, secondInfo, thirdInfo, fourInfo} from './nameSectioninfo';

const NameSection = () => {
    return (
        <div>
           <div className="image-bg">

                 <div style={{ position: 'relative', width: 'fit-content' }}>   
                <img src={image} alt="img" className="img" />
                {/* <div className="active-dot"></div> */}
                 <BsCircleFill className="active-dot"/>
                 </div>   

                 <div>
                     <p> Raiyad Raad </p>
                     <p> Status will be here  </p>
                 </div>
           </div>

           <div className="search-sec">

                <AiOutlineAppstore className="app-icon"/>
                <input type="search" placeholder="Search" className="search-option" />

                
           </div>

            <div className="task">
            <p> Add Task </p>
            </div>
           
           <div className="invite">
               <BsFillPersonPlusFill/>
               <p> Invite a friend </p>
           </div>

          

           <div className="text-msg-sec">

           <div className="text-title"> 
               <p> Overdue </p>
           </div>

                {firstInfo.map((i) => {
                    return(

                        <div className="single-msg">
                            
                        {/* <a href="" >     */}
                        <div className="img-div">
                        <img src={i.img} alt="one" className="image"  />
                         </div>

                        <div className="msg-area" >
                            <div className="name">
                                  <p> {i.name} </p> 
                                  <AiFillClockCircle className={i.clock}/> 
                            </div>
    
                            <div className="text">
                                <p> {i.text} </p>
                            </div>
    
                            <div className="date-time" >
                               <p> {i.date} &nbsp; &nbsp; </p> <p> {i.time} </p> 
                            </div>
                        </div>
    
                        <div className="icons">
    
                            <AiOutlineBars className={i.bar} />
                            <BsChatDots className={i.chat} />
                            <FiPaperclip className={i.clip} />
                        </div>
                        {/* </a> */}
                    </div>
    
              

                    )
                })}

            <div className="text-title"> 
               <p> Today </p>
            </div>

            {secondInfo.map((i) => {
                    return(

                        <div className="single-msg">
                    
                        <div className="img-div">
                        <img src={i.img} alt="one" className="image"  />
                         </div>

                        <div className="msg-area" >
                            <div className="name">
                                  <p> {i.name} </p> 
                                  <AiFillClockCircle className={i.clock}/> 
                            </div>
    
                            <div className="text">
                                <p> {i.text} </p>
                            </div>
    
                            <div className="date-time" >
                               <p> {i.date} &nbsp; &nbsp; </p> <p> {i.time} </p> 
                            </div>
                        </div>
    
                        <div className="icons">
    
                            <AiOutlineBars className={i.bar} />
                            <BsChatDots className={i.chat} />
                            <FiPaperclip className={i.clip} />
                        </div>
                    </div>
    
              

                    )
                })}


            <div className="text-title"> 
               <p> Later </p>
            </div>

            {thirdInfo.map((i) => {
                    return(

                        <div className="single-msg">
                    
                        <div className="img-div">
                        <img src={i.img} alt="one" className="image"  />
                         </div>

                        <div className="msg-area" >
                            <div className="name">
                                  <p> {i.name} </p> 
                                  <AiFillClockCircle className={i.clock}/> 
                            </div>
    
                            <div className="text">
                                <p> {i.text} </p>
                            </div>
    
                            <div className="date-time" >
                               <p> {i.date} &nbsp; &nbsp; </p> <p> {i.time} </p> 
                            </div>
                        </div>
    
                        <div className="icons">
    
                            <AiOutlineBars className={i.bar} />
                            <BsChatDots className={i.chat} />
                            <FiPaperclip className={i.clip} />
                        </div>
                    </div>
    
              

                    )
                })}

                
            <div className="text-title"> 
               <p> Complete </p>
            </div>

            {fourInfo.map((i) => {
                    return(

                        <div className="single-msg">
                    
                        <div className="img-div">
                        <img src={i.img} alt="one" className="image"  />
                         </div>

                        <div className="msg-area" >
                            <div className="name">
                                  <p> {i.name} </p> 
                                  <AiFillClockCircle className={i.clock}/> 
                                  <IoIosCheckmarkCircle style={{ color: 'green' }} />
                            </div>
    
                            <div className="text">
                                <p> {i.text} </p>
                            </div>
    
                            <div className="date-time" >
                               <p> {i.date} &nbsp; &nbsp; </p> <p> {i.time} </p> 
                            </div>
                        </div>
    
                        <div className="icons">
    
                            <AiOutlineBars className={i.bar} />
                            <BsChatDots className={i.chat} />
                            <FiPaperclip className={i.clip} />
                        </div>
                    </div>
    
              

                    )
                })}

            </div>  
        </div>
    );
};

export default NameSection;