import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

import axios from "axios";

interface Doctor {
  id: number;
  name: string;
  expertise: string;
  city: string;
}

interface BookingData {
  name: string;
  phoneNumber: string;
  age: string;
  city: string;
  company: string;
  chiefComplaints: string;
  previousExperience: string;
}

const BookingForm: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  useEffect(() => {
    // Fetch doctors from the API
    axios
      .get<Doctor[]>("http://localhost:3001/doctors")
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Booking data:", bookingData);
  };

  return (
    <Box p={6} boxShadow={"base"} color={"blue"} borderRadius={"5"}>
      <VStack spacing={3}>
        <form onSubmit={handleSubmit}>
          <Heading textAlign={"center"} pb={"4"}>
            Appoinment
          </Heading>
          <SimpleGrid columns={2} spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={bookingData.name}
                onChange={(e) =>
                  setBookingData({ ...bookingData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                value={bookingData.phoneNumber}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input
                type="text"
                value={bookingData.age}
                onChange={(e) =>
                  setBookingData({ ...bookingData, age: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                value={bookingData.city}
                onChange={(e) =>
                  setBookingData({ ...bookingData, city: e.target.value })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input
                type="text"
                value={bookingData.company}
                onChange={(e) =>
                  setBookingData({ ...bookingData, company: e.target.value })
                }
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Chief Complaints</FormLabel>
              <Textarea
                value={bookingData.chiefComplaints}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    chiefComplaints: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl gridColumn="span 2">
              <FormLabel>Previous Experience with Physiotherapy</FormLabel>
              <Textarea
                value={bookingData.previousExperience}
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    previousExperience: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Select City</FormLabel>
              <Select value={selectedCity} onChange={handleCityChange}>
                <option value="">Select City</option>
                {/* Populate options dynamically based on available cities */}
                {doctors.map((doctor) => (
                  <option key={doctor.city} value={doctor.city}>
                    {doctor.city}
                  </option>
                ))}
              </Select>
            </FormControl>
          </SimpleGrid>
          <Button
            mt={"4"}
            textAlign={"center"}
            type="submit"
            width={"100%"}
            bgColor={"skyblue"}
          >
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default BookingForm;
