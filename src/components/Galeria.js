import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext} from "react";

export default function Home() {
  const {allPhotos, likedPhotos} = useContext(MyContext);
  return (
    <div className="galeria grid-columns-5 p-3">
            {allPhotos.map((photo, i) => {
              return (
                <div className="foto" key={i} style={{backgroundImage: `url(${photo.src.tiny})`}} onClick={() => likedPhotos(photo.id)} >
                <Heart filled={photo.liked}/>
                <p>{photo.alt}</p>
                </div>
              )
            })};
    </div>
  );
};
