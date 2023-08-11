import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Icon,
  Box,
 
} from "@chakra-ui/react";

import { FaEdit, FaTrash } from "react-icons/fa";
import MovieForm from "./MovieForm";
import { useState } from "react";


const data = [
  {
    id: 1,
    title: "Movie 1",
    description: "This is Movie 1",
    duration: "2h 30m",
    language: "English",
    genre: "Action",
    releaseDate: "2022-01-01",
  }
 
];

const MoviesList = () => {
 const [formType , setFormType] = useState('add')

  return (
    <Box>
      <MovieForm formType={formType} setFormType={setFormType} />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Duration</Th>
            <Th>Language</Th>
            <Th>Genre</Th>
            <Th>Release Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((movie) => (
            <Tr key={movie.id}>
              <Td>{movie.title}</Td>
              <Td>{movie.description}</Td>
              <Td>{movie.duration}</Td>
              <Td>{movie.language}</Td>
              <Td>{movie.genre}</Td>
              <Td>{movie.releaseDate}</Td>
              <Td>
                <IconButton
                  aria-label="Edit"
                  icon={<Icon as={FaEdit} />}
                  size="sm"
                  mr={2}
                  
                />
                <IconButton
                  aria-label="Delete"
                  icon={<Icon as={FaTrash} />}
                  size="sm"
                  
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default MoviesList;
