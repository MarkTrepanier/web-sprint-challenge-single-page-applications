import * as Yup from 'yup';

const schema = Yup.object().shape({
    name:Yup.string().trim().required('Name is required!').min(2,"name must be at least 2 characters"),
    address:Yup.string(),
    size:Yup.string(),
    sauce:Yup.boolean(),
    cheese:Yup.boolean(),
    pepperoni:Yup.boolean(),
    anchovie:Yup.boolean(),
    onion:Yup.boolean(),
    mushroom:Yup.boolean(),
    specialInstructions:Yup.string(),
})
export default schema;