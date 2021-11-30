import React, {useState} from 'react'
import FormContainer from '../../components/Form/FormContainer'
import FormRow from '../../components/Form/FormRow'
import Label from '../../components/Form/Label'
import TextInput from '../../components/Form/TextInput'
import SubmitButton from '../../components/Form/SubmitButton'
import TableSettingContainer from '../../components/Form/TableSettingContainer'
import Layout from '../Layout'
import api from '../../api'
import NumberInput from '../../components/Form/NumberInput'
import ErrorText from '../../components/Form/ErrorText'

const CreateItem = () => {
    const nameRef = React.createRef()
    const priceRef = React.createRef()
    const sizeRef = React.createRef()
    const colorRef = React.createRef()
    const descriptionRef = React.createRef()
    const [errors, setErrors] = useState([])

    const submitAddItem = async (e) => {
        e.preventDefault()
        try {
            setErrors([])
            const response = await api().post('/api/v1/items', {
                name: nameRef.current.value,
                price: priceRef.current.value,
                size: sizeRef.current.value,
                color: colorRef.current.value,
                description: 'blah blah'
            })
        }
        catch(error) {
            setErrors(error.response.data.errors)
            console.log(error.response)
        }
    }

    return (
        <Layout pageTitle={"Add New Item"}>
            <FormContainer>
                <form onSubmit={(e) => submitAddItem(e)}>
                    <FormRow>
                        <Label name={"name"} />
                        <TextInput name={"name"} ref={nameRef} />
                    </FormRow>
                    
                    <FormRow>
                        <Label name={"price"} />
                        <NumberInput name={"price"} ref={priceRef} />
                    </FormRow>
                    {/* <ErrorText text={errors.price && errors.price} /> */}
                    <FormRow>
                        <Label name={"size"} />
                        <TextInput name={"size"} ref={sizeRef} />
                    </FormRow>
                    {/* <ErrorText text={errors.size && errors.size} /> */}
                    <FormRow>
                        <Label name={"color"} />
                        <TextInput name={"color"} ref={colorRef} />
                    </FormRow>
                    {/* <ErrorText text={errors.color && errors.color} /> */}
                    <TableSettingContainer>
                        <SubmitButton name={"Add Item"}>
                            <i className="fas fa-save"></i>
                        </SubmitButton>
                    </TableSettingContainer>
                </form>
                {
                    errors && Object.values(errors).map( (value, index) => {
                        return <ErrorText key={index} text={value} />
                    })
                    
                    
                }
            </FormContainer>
        </Layout>
    )
}

export default CreateItem