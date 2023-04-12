import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import React from "react";
export type Note = {
  id: string;
} & NoteData;

export type RawNote ={
  id:string

}

export type RawNoteData = {
  title: string;
  markdown: string;
  tagsIds: string[]
};
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};
export type Tag = {
  id: string;
  label: string;
};
export default function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES',[])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS',[])
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<div>hey</div>} />
        <Route path="/new" element={<NewNote />} />

        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
