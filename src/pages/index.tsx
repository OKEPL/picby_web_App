import { Button, Flex, Heading } from "@chakra-ui/core"
import Link from "next/link"
import { Wrapper } from "../components/common/Wrapper"
import { useEntriesQuery } from "../generated/graphql"
import { withApollo } from "../utils/withApollo"

const Index = () => {
   const {data, loading, error} = useEntriesQuery()
   console.log(data)
   console.log(loading)
   if(loading) {
     return null
   }

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
    <Wrapper>
      {data && JSON.stringify(data.entries)}
    </Wrapper>
    </>
  )
  }

export default withApollo({ssr: true})(Index)
