import React, { useState } from 'react'
import { Tab, Nav, Button } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import Dice from './Dice'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'
const DICE_KEY = 'dice'

export default function Sidebar({ id }) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
  return (
    <div style = {{width: '300px'}} className = "d-flex flex-column">
        <Tab.Container activeKey = {activeKey} onSelect={setActiveKey}>
            <Nav variant = "tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey = {CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey = {CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey = {DICE_KEY}>Dice</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className="border border-top-0 overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts />
                </Tab.Pane>
                <Tab.Pane eventKey={DICE_KEY}>
                    <Dice />
                </Tab.Pane>
            </Tab.Content>
            <div className = "p-2 border border-top-0 small">
              Your ID: <span className = "text-muted" >{id}</span>  
            </div>
            <Button className="rounded-0">
                New {conversationsOpen ? "Conversation" : "Contact" }
            </Button>
        </Tab.Container>
    </div>
  )
}
