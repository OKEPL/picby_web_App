import { Box, Button } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react'
import { useDropzone  } from 'react-dropzone';
import { useAddEntryMutation } from '../../../../../generated/graphql';
import Layout from '../../../../../parentMode/Layout';
import { withApollo } from '../../../../../utils/withApollo';

interface CatalogProps {

}

const NewEntry: React.FC<CatalogProps> = ({}) => {
    const catalogId = useRouter().query.id as string
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null)
    const [addEntry] = useAddEntryMutation();
    const onDrop = useCallback(async ([acceptedFile]) => {
      console.log(acceptedFile)
      // setPreview(URL.createObjectURL(acceptedFile))
      // setFile(acceptedFile)
      const result = await addEntry({
        variables: {
          photo: acceptedFile,
          catalogId,
          description: "TEST"
        }
      })

      console.log(result)
    }, [addEntry])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      multiple: false,
      accept: "image/*",
      onDrop
    })

    const saveEntry = async () => {
      console.log(file)
     const result =  await addEntry({variables: {
        catalogId,
        description: "This is test",
        photo: file
      }})
      console.log(result)
    }

    return (<Layout> 
     New entry 
     <Box>
        <div {...getRootProps()}>
            <input {...getInputProps()}/>
            {
              isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )
            }
        </div>
     </Box>
     {preview && <img src={preview} />}
     <Button onClick={saveEntry}>save entry</Button>
    </Layout>);
}

export default withApollo({ssr: true})(NewEntry);