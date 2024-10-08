import { useEffect, useState } from "react";

export default function Photos() {
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setImagen(data))
      .catch((error) => console.error("Error fetching images:", error)); 
  }, []);

  return (
    <>
      <div>ListarImagenes</div>
      {Array.isArray(imagen) && imagen.length > 0 ?( 
        imagen.slice(0, 10).map((image) => ( 
          <div key={image.id}>
            <p>title: {image.title}</p>
            <img src={image.url} width="300"/> 
            <p>thumbnail:</p>
            <img src={image.thumbnailUrl} width="150"/> 
          </div>
        ))
      ) : (
        <p>Cargando imágenes...</p> 
      )}
    </>
  );
}
