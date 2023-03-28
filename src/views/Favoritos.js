import "../assets/css/galeria.css";
import MyContext from "../MyContext";
import { useContext} from "react";

export default function Favoritos() {
  const {allPhotos, likedPhotos} = useContext(MyContext);
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <p>Para quitar de favoritos, clickea la fotografía.</p>
      <div className="p-3 galeria grid-columns-4">
        {allPhotos.map((photo, i) => {
          if (photo.liked == true) {
            return (
              <div className="foto" key={i} style={{backgroundImage: `url(${photo.src.tiny})`}} onClick={() => likedPhotos(photo.id)}>
                <p>{photo.alt}</p>
              </div>
            )
          }
        })};
      </div>
    </div>
  );
}
