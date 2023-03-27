import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./components/Users";
import Photos from "./components/Photos";
import Form from "./components/Form";
import UsersBtn from "./components/UsersBtn";
import PhotosBtn from "./components/PhotosBtn";

function App() {
  const [page, setPage] = useState();
  const [input, setInput] = useState();

  // useEffect(() => {
  //   console.log("App mounted")
  // }, [])
  //const btn = {
  // color: "red",
  //backgroundColor: "green",
  // };
  return (
    <>
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("photos")}>Photos</button>
      {page === "users" && <Users />}
      {page === "photos" && <Photos />}
      <Form setPage={setPage} />
      <br />
      <br />
      <UsersBtn setPage={setPage} />
      <PhotosBtn setPage={setPage} />
      {page === "users" && <Users />}
      {page === "photos" && <Photos />}
    </>
  );
}

export default App;
