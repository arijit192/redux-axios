import { useDispatch } from "react-redux";
import { loadPhotosFromApi } from "./reducerSlices/photoSlice";
import { loadAlbumsFromApi } from "./reducerSlices/albumSlice";
import { Container } from "@mui/material";
import { useEffect } from "react";
import Album from "./Components/Album";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotosFromApi());
    dispatch(loadAlbumsFromApi());
  }, []);

  return (
    <Container maxWidth="xl">
      <Album />
    </Container>
  );
}

export default App;
