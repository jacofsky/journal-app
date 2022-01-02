import {useState} from 'react'

export const useForm = (initialForm = {}) => {
    const [formValues, setFormValues] = useState(initialForm)

    const resetForm = () => {
        setFormValues(initialForm)
    }

    const handleInputChange = ({target}) => {
        setFormValues({...formValues, [target.name]: target.value})
    }

    return({formValues, handleInputChange, resetForm})
}