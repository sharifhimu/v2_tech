import React from 'react';

import './Conversation.scss';

import {TiMessages} from 'react-icons/ti';

const Conversation = () => {
    return (
        <div>
            <div className="conversation-sec">
                <p> Task Conversation </p>
            </div>

            <div className="conversation">
                <TiMessages className="conversation-icon"/>
                <p> Start Chatting Here </p>

            </div>
        </div>
    );
};

export default Conversation;