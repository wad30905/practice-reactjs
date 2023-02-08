import { useEffect, useState} from "react";
import axios from "axios"; 
import {Link} from "react-router-dom";
import Movie from "../components/Movie";
interface Imovie {
  id : string;
  url : string;
  imdb_code : string;
  title : string;
  title_english : string;
  title_long : string;
  slug : string;
  year : string;
  rating : string;
  runtime : string;
  genres : Array<string>;
  summary : string;
  description_full : string;
  synopsis : string;
  yt_trailer_code : string;
  language : string;
  mpa_rating : string;
  background_image : string;
  background_image_original : string;
  small_cover_image : string;
  medium_cover_image : string;
  large_cover_image : string;
  state : string;
  torrents : string;
  date_uploaded : string;
  date_uploaded_unix : string;
}
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Imovie[]>();
  const getMovies = async () => {
    const response = await axios({method: "get", url: "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"});
    setData(response.data.data.movies);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  })
  console.log("isLoading", isLoading);
  console.log("data", typeof data);
  return isLoading ? <div>asdf</div> : (
    data ? (<div>
      {data.map((movie) => {
        return(
          <Movie
            id = {movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        )
      })}
    </div> ) : null
  );
}

export default Home;