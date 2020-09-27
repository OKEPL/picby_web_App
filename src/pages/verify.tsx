import React from 'react'

import { useRouter } from "next/router";
import { Button } from '@chakra-ui/core';
import {  useConfirmUserMutation } from '../generated/graphql';

interface VerifyProps {

}

 const Verify: React.FC<VerifyProps> = ({}) => {
    const router = useRouter()
    const [verifyRegisterToken] = useConfirmUserMutation()

    const verifyAccount = async () => {
      const token = router.query.token as string;
      const {data, errors} = await verifyRegisterToken({variables: {token}})
      console.log(data)
      console.log(errors)
      debugger;
      if(data.confirmUser === true) {
        router.push("/login")
      } else {
          //TODO: handle potential errors here
      }
    }
    

    return (
      <div>
        <Button onClick={verifyAccount}>Verify account</Button>
      </div>
    );
}

export default Verify;