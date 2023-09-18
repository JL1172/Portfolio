import * as yup from 'yup'

export const schema = yup.object().shape({
    fname : yup.string().required("Field is required").min(2,"Name must be more than 2 characters long").matches(/^[A-Za-z]*$/,"Name must only contain letters"),
    lname : yup.string().required("Field is required").min(2,"Name must be more than 2 characters long").matches(/^[A-Za-z]*$/,"Name must only contain letters"),
    email : yup.string().email("Must be a valid email").required("Field is required"),
    message : yup.string().matches(/^[A-Za-z0-9:.]*$/,"Only numbers and letters allowed"),
})