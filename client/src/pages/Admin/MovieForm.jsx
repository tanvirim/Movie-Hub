/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { AddMovie } from "../../apicalls/movies";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const MovieForm = ({ formType, setFormType }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    language: "",
    genre: "",
    releaseDate: "",
    poster: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (formType === "add")
    dispatch(ShowLoading());
    AddMovie(formData)
        .then((response) => {
          console.log("Movie data submitted successfully:", response);
          onClose();
          dispatch(HideLoading());
          setFormData("");
        })
        .catch((error) => {
          dispatch(HideLoading());                      
          console.error("Error submitting movie data:", error);
        });
    
  };

  return (
    <Box marginBottom={3}>
      <Button onClick={onOpen}>Add Movie</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="600px" maxH="90vh">
          <ModalHeader>
            {formType === "add" ? "Add Movie" : "Edit Movie"}
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Description"
                  />
                </FormControl>
                <HStack spacing={4}>
                  <FormControl>
                    <FormLabel>Duration</FormLabel>
                    <Input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="Duration"
                    />
                  </FormControl>
                  <FormControl>
                    <FormControl>
                      <FormLabel>Language</FormLabel>
                      <Select
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        placeholder="Select language"
                      >
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                      </Select>
                    </FormControl>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Genre</FormLabel>
                    <Select
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      placeholder="Select genre"
                    >
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Comedy">Comedy</option>
                    </Select>
                  </FormControl>
                </HStack>
                <HStack spacing={4}>
                  <FormControl>
                    <FormLabel>Release Date</FormLabel>
                    <Input
                      type="date"
                      name="releaseDate"
                      value={formData.releaseDate}
                      onChange={handleInputChange}
                      placeholder="Release Date"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Poster (Image URL)</FormLabel>
                    <Input
                      type="text"
                      name="poster"
                      value={formData.poster}
                      onChange={handleInputChange}
                      placeholder="Poster (Image URL)"
                    />
                  </FormControl>
                </HStack>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MovieForm;
