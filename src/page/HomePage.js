import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import NameSection from '../components/nameSection/NameSection';
import MessageSection from '../components/message_section/MessageSection';
import Conversation from '../components/conversation_sec/Conversation';

const HomePage = () => {
    return (
        <div style={{ position: 'relative' }}>

        <Container style={{ maxWidth: '100%' }}>
            <Row>
                <Col lg={3} style={{ padding: '0', borderRight: '1px solid rgba(0,0,0,.2)' }}>

                <NameSection />
                
                </Col>

                <Col lg={6} style={{ padding: '0',  borderRight: '1px solid rgba(0,0,0,.2)' }}>
                <MessageSection />
                </Col>

                <Col lg={3} style={{ padding: '0' }}>
                <Conversation />
                </Col>
            </Row>
        </Container>
            
        </div>
    );
};

export default HomePage;