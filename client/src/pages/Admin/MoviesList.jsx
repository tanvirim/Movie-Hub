
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Icon, Box, Button } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Movie 1",
    description: "This is Movie 1",
    duration: "2h 30m",
    language: "English",
    genre: "Action",
    releaseDate: "2022-01-01",
  },
  {
    id: 2,
    title: "Movie 2",
    description: "This is Movie 2",
    duration: "2h",
    language: "Spanish",
    genre: "Drama",
    releaseDate: "2021-12-15",
  },
  // Add more data objects as needed
];

const MoviesList = () => {
  const handleDelete = (id) => {
    // Implement the delete functionality here
    console.log("Delete movie with ID:", id);
  };

  const handleEdit = (id) => {
    // Implement the edit functionality here
    console.log("Edit movie with ID:", id);
  };

  return (

<Box>
  <Button marginBottom={3}> Add Movies</Button>
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
                onClick={() => handleEdit(movie.id)}
              />
              <IconButton
                aria-label="Delete"
                icon={<Icon as={FaTrash} />}
                size="sm"
                onClick={() => handleDelete(movie.id)}
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
