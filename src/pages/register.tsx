
import { Box, Button } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputField } from '../components/common/InputField';
import { Wrapper } from '../components/common/Wrapper';
import { useRegisterMutation } from '../generated/graphql';
import { graphlErrorsToValidationErrors, toErrorMap } from '../utils/graphl.utils';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const [register] = useRegisterMutation({errorPolicy: 'all'})
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, {setErrors}) => {
        
          const {data: {register: {errors}}} = await register({
            variables: {
              data: values 
            }
          })
          
          if(errors) {
            setErrors(toErrorMap(errors))
          }
        }}

      
      >
        {({ isSubmitting }) => (
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
            <Box mt={4}></Box>
            <Button
              variantColor="teal"
              mt={4}
              isLoading={isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
