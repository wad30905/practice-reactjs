import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Iparams {
  [key: string]: string | undefined;
}

interface ImovieDetail {
  'id': string;
  'url': string;
  'imdb_code': string;
  'title': string;
  'title_english': string;
  'title_long': string;
  'slug': string;
  'year': string;
  'rating': string;
  'runtime': string;
  'genres': string;
  'download_count': string;
  'like_count': string;
  'description_intro': string;
  'description_full': string;
  'yt_trailer_code': string;
  'language': string;
  'mpa_rating': string;
  'background_image': string;
  'background_image_original': string;
  'small_cover_image': string;
  'medium_cover_image': string;
  'large_cover_image': string;
  'torrents': string;
  'date_uploaded': string;
  'date_uploaded_unix': string;
}

function Detail() {
  const {id} = useParams<Iparams>();
  const [movieDetail, setMovieDetail] = useState<ImovieDetail | undefined>();
  const fetchMovieDetail = async () => {
    const response: {data: {data: {movie: ImovieDetail}}} = await axios({method: "get", url: `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`});
    const movie = await response.data.data.movie;
    setMovieDetail(movie);
  }
  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div>Detail</div>
  )
};

export default Detail;