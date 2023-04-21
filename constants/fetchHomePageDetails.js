import { useEffect, useState } from "react";
import { client } from "./sanityClient";

export const fetchHomePageDetails = (title) => {
  const [details, setDetails] = useState({});
  const getDetails = async () => {
    await client
      .fetch(`*[_type == "details" && name == "${title}"][0]`)
      .then((res) => setDetails(res));
  };
  useEffect(() => {
    getDetails();
  }, []);
  if (details !== {}) {
    return details;
  }
};

export const fetchTechnologyDetails = (title) => {
  const [details, setDetails] = useState({});
  const getDetails = async () => {
    await client
      .fetch(`*[_type == "technologies" && name == "${title}"][0]`)
      .then((res) => setDetails(res));
  };
  useEffect(() => {
    getDetails();
  }, []);
  if (details !== {}) {
    return details;
  }
};

export const fetchTimelineDetails = () => {
  const [details, setDetails] = useState({});
  const getDetails = async () => {
    await client
      .fetch(`*[_type == "timeline"] | order(year asc)`)
      .then((res) => setDetails(res));
  };
  useEffect(() => {
    getDetails();
  }, []);
  // console.log("object", details);
  if (details !== {}) {
    return details;
  }
};
