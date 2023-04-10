import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  return (
    <Container className="my-4">

    <Routes>
      <Route path="/" element={<div>hey</div>} />
      <Route path="/new" element={<h1>new</h1>} />

      <Route path="/:id" >
        <Route index element={<h1>Show</h1>}/>
        <Route path="edit" element={<h1>edit</h1>}/>
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </Container>
  );
}
