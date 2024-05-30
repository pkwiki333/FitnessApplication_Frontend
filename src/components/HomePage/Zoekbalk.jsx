import { Box, Input } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function Zoekbalk() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputHandler = useCallback(
    (e) => {
      setSearchParams({ search: e.target.value });
    },
    [setSearchParams]
  );
  return (
    <Box ml="35%" mt={"20px"}>
      <Input
        onChange={inputHandler}
        placeholder="Search"
        w={500}
        bgColor={"white"}
      />
    </Box>
  );
}
