import React, { useMemo } from "react";
import { getPublicGists } from "../services/gistService";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import Gist from "./Gist";

const GistList = ({ searchKeyword }) => {
  const { error, isLoading, data } = useQuery({
    queryKey: ["gists"],
    queryFn: getPublicGists,
  });

  const filteredData = useMemo(
    () =>
      data?.data?.filter(({ owner }) =>
        owner?.login?.toLowerCase()?.includes(searchKeyword?.toLowerCase())
      ),
    [searchKeyword, data?.data]
  );

  if (error) return <div>Something went wrong</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div id="container">
      {filteredData?.map((gist, key) => (
        <Gist {...{ gist, key }} />
      ))}
    </div>
  );
};

GistList.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
};
export default GistList;
