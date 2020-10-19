import { Box, Button, Input } from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useState } from 'react'
import { useDropzone  } from 'react-dropzone';
import { InputField } from '../../../../../components/common/InputField';
import { useAddEntryMutation, useAddProfilePictureMutation } from '../../../../../generated/graphql';
import Layout from '../../../../../parentMode/Layout';
import { withApollo } from '../../../../../utils/withApollo';

interface CatalogProps {

}

let fileToSave: File | null = null; 

const NewEntry: React.FC<CatalogProps> = ({}) => {
    const catalogId = useRouter().query.id as string
    const [description, setDescription] = useState('');
    const [preview, setPreview] = useState(null)
    const [addEntry] = useAddEntryMutation();
    const onDrop = useCallback(async ([acceptedFile]:File[]) => {
      console.log(acceptedFile)

      setPreview(URL.createObjectURL(acceptedFile))
      fileToSave = acceptedFile
     
    }, [addEntry])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      multiple: false,
      accept: "image/*",
      onDrop
    })

    const saveEntry = async () => {
     const result =  await addEntry({variables: {
        catalogId,
        description: "This is test",
        photo: fileToSave
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
     <Input
      onChange={(event) => setDescription(event.target.value) } 
      placeholder="Entry description"
      name="description"
      />
     <Button onClick={saveEntry}>save entry</Button>
    </Layout>);
}

export default withApollo({ssr: true})(NewEntry);