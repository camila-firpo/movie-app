import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import YouTube from 'react-youtube';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const CardInfo = () => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    // endpoint para las imagenes
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    // variables de estado
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [playing, setPlaying] = useState(false);

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
        setMovie(data);
    };

    const selectMovie = async (movie) => {
        fetchMovie(movie.id);
        setMovie(movie);
        window.scrollTo(0, 0);
    };

    const search = useLocation().search;
    const searchParams = new URLSearchParams(search)

    useEffect(() => {
        fetchMovie(searchParams.get('id'));
    }, []);

    return (
        <Box>
            <Typography variant="h3"> {movie.title} </Typography>
            <Box>
                <main>
                    {movie ? (
                        <Box
                            className="viewtrailer"
                            style={{
                                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                height: 1200,
                                width: 1000,
                                paddingTop: 50
                            }}
                        >
                            {playing ? (
                                <>
                                    <YouTube
                                        videoId={trailer.key}
                                        className="reproductor container"
                                        containerClassName={"youtube-container amru"}
                                        opts={{
                                            width: "100%",
                                            height: "100%",
                                            playerVars: {
                                                autoplay: 1,
                                                controls: 0,
                                                cc_load_policy: 0,
                                                fs: 0,
                                                iv_load_policy: 0,
                                                modestbranding: 0,
                                                rel: 0,
                                                showinfo: 0,
                                            },
                                        }}
                                    />
                                    <Button onClick={() => setPlaying(false)} className="boton" sx={{ backgroundColor: 'primary.button' }}>
                                        Close
                                    </Button>
                                </>
                            ) : (
                                <Box className="container">
                                    <Box className="">
                                        {trailer ? (
                                            <Button sx={{ backgroundColor: 'primary.button' }}
                                                className="boton"
                                                onClick={() => setPlaying(true)}
                                                type="button"
                                            >
                                                Play Trailer
                                            </Button>
                                        ) : (
                                            "Sorry, no trailer available"
                                        )}
                                        <h1 className="text-white">{movie.title}</h1>
                                        <p className="text-white">{movie.overview}</p>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ) : null}
                </main>
            </Box>
        </Box>
    );
}

export default CardInfo;