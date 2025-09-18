import { useState } from "react";

const useForm = (initialValue,validateValue) => {
  const [form, setForm]= useState(initialValue);
  const [errors, setErrors] = useState({});
  const[loadingName,setLoadingName]=useState(false);
  const[response,setResponse]=useState(null);

  const handleChangeName = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur=(event)=>{
    handleChangeName(event);
    setErrors(validateValue(form));
  }

  const handleSubmit = (event) => {
    handleChangeName(event);
    setErrors(validateValue(form));
    console.log("Form submitted:", form);
  };

  

  return { 
    form, 
    setForm,
    loadingName,
    errors,
    response,
     handleChangeName,
     handleBlur,
      handleSubmit };
};

export default useForm;