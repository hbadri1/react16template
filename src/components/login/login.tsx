import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { useForm } from 'react-hook-form';

const Login = (props: any) => {
    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" innerRef={register({ required: true })}/>
                {errors.email ? <span>hello</span> : null}
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" innerRef={register({ required: true })} />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    )
}

export default Login