import { Link } from "react-router-dom";

interface movieProps {
  coverImg: string;
  title: string;
  summary: string;
  genres: string[];
  id: string;
}

function Movie({id, coverImg, title, summary, genres} : movieProps) {
  return(
    <div>
      <img src={coverImg} />
      <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  );
};

export default Movie;