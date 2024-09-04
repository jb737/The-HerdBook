import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import {  Card } from "react-bootstrap";
import { UserContext } from "../../contexts/userContext";


export default function BullFiles() {
    const { user } =useContext(UserContext);
    
    return user ? (
        <div>
            <h1>Bull Files:</h1>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>animal name</Card.Title>
        <Card.Text>
          animal description
        </Card.Text>
        <Link className = "btn btn-primary" to = {`/bull_files`}>Animal Details</Link>
      </Card.Body>
    </Card>
  
        </div>
   ):(<Navigate to = "/account/login" />);
    
}