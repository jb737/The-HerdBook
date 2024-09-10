import { useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./AnimalFormPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { IoSendOutline } from "react-icons/io5";
import animalsService from "../../services/animalsService";


export default function AnimalFormPage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { animalId } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [isValidated, setValidated] = useState(false);

    const [name, setName] = useState("")
    const [sex, setSex] = useState( "");
    const [details, setDetails] = useState("");
    const [importantEvents, setImportantEvents] = useState("");
    const [veterinaryNotes, setVeterinaryNotes] = useState("");

    useEffect(() => {
        const getAnimal = async() => {
            try {
                setIsLoading(true);
                const {name, sex, details, importantEvents, veterinaryNotes} = await animalsService.getAnimalById(Number(animalId));
                setName(name);
                setSex(sex);
                setDetails(details ?? "");
                setImportantEvents(importantEvents ?? "");
                setVeterinaryNotes(veterinaryNotes ?? "");
            } catch (error) {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }

        if(animalId){
            getAnimal();
        }
    }, [animalId])



    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        //const herdBookName = user!.herdBookName;

        const newAnimal: Animal = {
            id: 6,
            name,
            herdBookName: user!.id,
            sex,
            importantEvents,
            details,
            veterinaryNotes,
        };
    navigate(`/animals/${newAnimal.id}`);
    };

     const pageContents = isLoading ? (<h5>Loading...</h5>) : ( <Container>
     <Row className="mt-5"> <h1>Add an Animal:</h1></Row>
     <Form noValidate validated={isValidated} onSubmit={onSubmitHandler}>
         <Row className = "text-center mt-5 mb-5">
         <Row ><Button className = {classes.submit_btn +" mb-3"} type = "submit" variant="success">Put this record in the Herd Book <IoSendOutline /></Button></Row>
         <Col>
             <Form.Group className="mb-3">
                 <Form.Label>Animal Name or Id:</Form.Label>
                 <Form.Control
                 required
                  type="name" 
                  value = {name}
                  onChange= {(e) => setName(e.target.value)}
                  />
             </Form.Group>
         </Col>
         <Col>
             <Form.Group className="mb-3" >
                 <Form.Label>Animal Sex:</Form.Label>
                 <Form.Control
                 required
                  type="sex" 
                  value = {sex}
                  onChange= {(e) => setSex(e.target.value)}
                  />
             </Form.Group>
         </Col>
         </Row>
        <Row>
        <Form.Group className="mb-3" >
             <Form.Label>Important Events:</Form.Label>
             <Form.Control as="textarea" rows={3}
             type = "importantEvents"
             value = {importantEvents}
             onChange = {(e) => setImportantEvents(e.target.value)} />
             </Form.Group>
        </Row>
         <Row>
             <Form.Group className="mb-3" >
             <Form.Label>Animal Details</Form.Label>
             <Form.Control as="textarea" rows={3}
             type = "details"
             value = {details}
             onChange = {(e) => setDetails(e.target.value)} />
             </Form.Group>
         </Row>
         <Row>
             <Form.Group className="mb-3" >
             <Form.Label>Veterinary Notes:</Form.Label>
             <Form.Control as="textarea" rows={3}
             type = "veterinaryNotes"
             value = {veterinaryNotes}
             onChange = {(e) => setVeterinaryNotes(e.target.value)} />
             </Form.Group>
         </Row>
         
     </Form>
 </Container>)

    return (
        <div>
        {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> :pageContents}
        
        </div>
    );
}