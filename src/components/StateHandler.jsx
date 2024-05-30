import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export default function StateHandler({ loading, error, ...props }) {
  if (loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size="xl" color="green.500" />
      </Flex>
    );
  }
  if (error) {
    return <div>Error : {error.message}</div>;
  }
  return props.children;
}
