import { Box, Image, Text } from '@chakra-ui/core'
import Link from 'next/link';
import React from 'react'

interface ParentEntryProps {
  id: string;
  desc: string;
  imageUrl: string;
  catalogId: string;
}

export const ParentEntry: React.FC<ParentEntryProps> = ({id, desc, imageUrl, catalogId}) => {
  return (
    <Link href={`/parentMode/catalog/${catalogId}/entry/${id}`}>
      <Box flex="1 1 33%">
        
        <Image src={imageUrl} />
        <Text fontSize="sm">{desc}</Text>
      </Box>
</Link>
    );
}