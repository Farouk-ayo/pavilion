import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchInput() {
  return (
    <InputGroup ml="1.5">
      <InputLeftElement pointerEvents="none" left="3.5">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" placeholder="Search" w="30rem" />
    </InputGroup>
  );
}

export default SearchInput;
