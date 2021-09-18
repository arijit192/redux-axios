import { CardHeader, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

export default function Photo({ albumId }) {
  const photo = useSelector((state) => state.photo.data);

  return <></>;
}
