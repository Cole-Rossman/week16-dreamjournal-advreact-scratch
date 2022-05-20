import { useState } from 'react';

export default function useForm(inputs = {}) {
 const [formState, setFormState] = useState(inputs);

 const handleChange = (event) => {
   const { name, value } = event.target;

   setFormState((prevState) => {
    //  name: value is referring to the form in entries form where the value is set to formState.value. name comes from the name property in the form. event.target is targeting both properties in the form.
    return {
      ...prevState,
      [name]: value
    };
   });
 };

  

  return { formState, handleChange };
}
