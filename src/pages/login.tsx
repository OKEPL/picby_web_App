import { Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react'
import { InputField } from '../components/common/InputField';
import { Wrapper } from '../components/common/Wrapper';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/graphl.utils';
import { withApollo } from '../utils/withApollo';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter()
  const [login] = useLoginMutation()
    return (
      <Wrapper variant="small">
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={async (data, {setErrors}) => {
            const {data: {login: {user, errors}}} = await login({variables: {data }})
            if(user) {
              console.log(user)
              // login successful redirect
              //TODO: handle nextUrl query param
                router.push("/")
            } else if (errors) {
              if(errors) {
                setErrors(toErrorMap(errors))
              }
            }
          }}
        >{({
          isSubmitting
        }) => (
          <Form>
          <InputField
            name="email"
            type="email"
            label="Email"
            placeholder="email"
            autoComplete="email"
          />
           <InputField
            name="password"
            type="password"
            label="Password"
            placeholder="password"
            autoComplete="current-password"
          />
          <Button
            variantColor="teal"
            mt={4}
            isLoading={isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Form>
        )}
        </Formik>
      </Wrapper>
    );
}

export default withApollo({ssr: true})(Login); 