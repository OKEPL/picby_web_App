import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import React from 'react'
import { InputField } from '../common/InputField';

interface CatalogModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddCatalog: (catalogName: string) => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({isOpen, onClose, onAddCatalog}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <Formik
                    onSubmit={({catalogName}) => onAddCatalog(catalogName)}
                    initialValues={{
                        catalogName: ''
                    }}
                >{() => (
                    <Form>
                        <ModalHeader>
                    Catalog
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                        <InputField name="catalogName" label="Catalog name" placeholder="Catalog name" />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}> 
                        Close
                    </Button>
                    <Button type="submit">
                        Add
                    </Button>
                </ModalFooter>
            </Form>
                )
                    
                    }
                </Formik>
            </ModalContent>
        </Modal>
    );
}