import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, useDisclosure } from "@chakra-ui/core"
import Link from "next/link"
import { Wrapper } from "../components/common/Wrapper"
import MenuButton from "./MenuButton"

const Layout: React.FC = ({children}) => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  return (
    <>
    <Flex 
    backgroundColor="teal.500"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="white">
        <Flex align="center" mr={5}>
            <MenuButton handleToggle={onOpen}/>

        </Flex>
 
        <Button backgroundColor="blue.400">
          <Link href="/">
            ChildMode
          </Link>
        </Button>

    </Flex>
    <Wrapper>
      {children}
    <Drawer 
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      >
        <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Menu</DrawerHeader>
      <DrawerBody>
          <Link href="/parentMode/catalogs">Catalogs</Link>
      </DrawerBody>
      <DrawerFooter>
        <Button>Logout</Button>
      </DrawerFooter>
    </DrawerContent>
    </Drawer>
    </Wrapper>
    </>
  )
  }

export default Layout 

