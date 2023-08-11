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
import { GetAllMovies } from "../../apicalls/movies";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../redux/movieSlice";

import moment from "moment";

const MoviesList = () => {
  const dispatch = useDispatch();

  GetAllMovies().then(({ data }) => dispatch(addMovie(data)));

  const { movies } = useSelector((state) => state.movies);

  const [formType, setFormType] = useState("add");

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
          {movies.map((movie) => (
            <Tr key={movie.id}>
              <Td>{movie.title}</Td>
              <Td>{movie.description}</Td>
              <Td>{movie.duration}</Td>
              <Td>{movie.language}</Td>
              <Td>{movie.genre}</Td>
              <Td>{moment(movie.releaseDate).format("MMMM Do, YYYY")}</Td>
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
