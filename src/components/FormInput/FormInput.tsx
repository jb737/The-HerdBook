import { Form } from "react-bootstrap";

interface CreateHerdBookFormInputProps {
    title: string;
    type: "text" | "email" | "password" | "date";
    required?: boolean;
    id?: string;
    value: string | number | Date;
    placeholder?: string;
    errorMessage?: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e:React.FocusEvent<HTMLInputElement>) => void;
}

export default function CreateHerdBookFormInput({
    title, 
    type, 
    required, 
    id, 
    value, 
    onChange, 
    onBlur = () => {}, 
    placeholder, 
    errorMessage
}:CreateHerdBookFormInputProps): JSX.Element {
    id = id? id : title;

    const valueString = value instanceof Date ? value.toISOString().split("T")[0] : value;

    return (
    <>
      <Form.Label htmlFor = {id}>{title}</Form.Label>
                    <Form.Control
                        type = {type}
                        id = {id}
                        required = {required}
                        value = {valueString}
                        onChange = {onChange}
                        onBlur = {onBlur}
                        placeholder = {placeholder}
                    />
                    
                        <Form.Control.Feedback type="invalid">
                            {required && !errorMessage ? "Required Field" : errorMessage}
                        </Form.Control.Feedback>
    </>
    )
}