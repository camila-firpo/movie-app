import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { CardActionArea } from '@mui/material';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Input } from '@mui/material';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import "../index.css";

const Home = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    // endpoint para las imagenes
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    // variables de estado
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("discover");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [playing, setPlaying] = useState(false);

    // funcion para realizar la peticion get a la api
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results);
        setMovie(results[0]);

        if (results.length) {
            await fetchMovie(results[3].id);
        }
    };

    // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }
        //return data
        setMovie(data);
    };

    const selectMovie = async (movie) => {
        fetchMovie(movie.id);

        setMovie(movie);
        window.scrollTo(0, 0);
    };

    // funcion para buscar peliculas
    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
    };

    useEffect(() => {
        fetchMovies();

    }, []);

    return (
        <Box>
            <form className="container mb-4" >
                <Header />                {/* buscador */}
                <Box id="searchBar" className="input-group my-2">
                    <Input
                        sx={{
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                border: "0px solid #000000",
                                borderRadius: "0 0 0 0"
                            }
                        }}
                        type="text" placeholder="Search" onChange={(e) => setSearchKey(e.target.value)} />
                    <Box className="input-group-append">
                        <Button onClick={searchMovies} sx={{
                            fontWeight: "bold",
                            backgroundColor: 'primary.button',
                            "border-top-left-radius": "0px",
                            "border-bottom-left-radius": "0px"

                        }} id="searchButton">Search</Button>
                    </Box>
                </Box>
            </form>
            {/* contenedor para mostrar los posters de las peliculas */}
            <Box className="container mt-3">
                <Box className="row">
                    {movies.map((movie) => (
                        <Box
                            key={movie.id}
                            className="col-md-4 mb-3"
                            onClick={() => selectMovie(movie)}
                        >
                            <Card sx={{ maxWidth: 1300, backgroundColor: "primary.main" }}>
                                <CardActionArea component={Link} to={"/cardinfo?id=" + movie.id}>
                                    <CardMedia
                                        component="img"
                                        alt="Movie"
                                        height="450"
                                        src={`${URL_IMAGE + movie.poster_path}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h15" component="div" color="white">
                                            {movie.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', marginLeft: 2 }}>
                                            <Typography gutterBottom variant="h7" component="div" color="white">
                                                {movie.vote_average}
                                            </Typography>
                                            <Box>
                                                <StarIcon sx={{ color: 'primary.star' }}></StarIcon>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
}
export default Home;   