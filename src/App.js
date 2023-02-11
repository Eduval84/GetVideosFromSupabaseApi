import { supabase } from "./supabaseClient";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./styles.css";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().catch(console.error);
  }, []);

  const fetchVideos = async () => {
    let { data: Content, error, status } = await supabase
      .from("Content")
      .select("*");

    if (error || status !== 200) return <div>Error al obtener los videos.</div>;
    else setVideos(Content);
  };

  return (
    <div className="App">
      <h1>El rincon del dev</h1>
      {videos && videos.length > 0 ? (
        videos.map((v) => (
          <div key={v.id}>
            <h2>{v.title}</h2>
            <ReactPlayer url={v.url} controls={true} width="25%" height="25%" />
          </div>
        ))
      ) : (
        <div>No hay videos que mostrar.</div>
      )}
    </div>
  );
}
