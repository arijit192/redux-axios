import { Card, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Album() {
  const album = useSelector((state) => state.album.data);

  return (
    <>
      {album.map((album, index) => (
        <Card key={index}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5">{album.title}</Typography>
          </Box>
        </Card>
      ))}
    </>
  );
}
