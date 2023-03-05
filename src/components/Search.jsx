import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

function SearchInput() {
  return (
    <InputGroup ml="4">
      <InputLeftElement pointerEvents="none" left="3.5">
        <BiSearch color="gray" />
      </InputLeftElement>
      <Input type="text" placeholder="Search" w="30rem" />
    </InputGroup>
  );
}

export default SearchInput;
