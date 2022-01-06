import { useState, useEffect, useRef } from "react";

export default function Post() {
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [votes, setVotes] = useState(0);
  const [comment, setComment] = useState("");

  function handleUpVote() {}

  return <h1>Post</h1>;
}
