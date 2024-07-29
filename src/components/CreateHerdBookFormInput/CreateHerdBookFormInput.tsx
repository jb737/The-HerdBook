import { Form } from "react-bootstrap";

interface CreateHerdBookFormInputProps {
    title: string;
    type: "text" | "email" | "password"
    required?: boolean;
    id?: string;
    value: string | number;
    placeholder?: string;
    errorMessage?: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e:React.FocusEvent<HTMLInputElement>) => void;
}

export default function CreateHerdBookFormInput({title, type, required, id, value, onChange, onBlur = () => {}, placeholder, errorMessage}:CreateHerdBookFormInputProps): JSX.Element {
    id = id? id : title;

    return (
    <>
      <Form.Label htmlFor = {id}>{title}</Form.Label>
                    <Form.Control
                        type = {type}
                        id = {id}
                        required = {required}
                        value = {value}
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