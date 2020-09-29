import { Button, Flex, Heading } from "@chakra-ui/core"
import Link from "next/link"

const Index = () => {
  return (
    <Flex 
    backgroundColor="teal.500"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="white">
        <Flex align="center" mr={5}>
            <Heading size="lg">
              Picby
            </Heading>

        </Flex>
 
        <Button backgroundColor="blue.400">
          <Link href="/parentMode">
            Parent Mode
          </Link>
        </Button>

    </Flex>
  )
  }

export default Index
