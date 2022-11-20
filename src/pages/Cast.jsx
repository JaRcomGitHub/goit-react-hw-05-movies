import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { getTmdbMovieIdCredits, baseImageTmdbURL_l } from "services/api"
import { CastList, CastListItem, CastName, CastCharacter } from "components/App.styled";

export const Cast = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        setLoading(true);

        getTmdbMovieIdCredits(movieId)
            .then(data => {
                const cast = data.data.cast;
                //console.log('Cast', cast);
                setCast(cast);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            {loading === false && cast.length === 0 && <p>We don't have any cast for this movie.</p>}
            {cast.length > 0 && 
                <CastList>
                    {cast.map(({ name, character, profile_path }, index) => (
                        <CastListItem key={index}>
                            {profile_path && <img
                                src={baseImageTmdbURL_l + profile_path}
                                alt={"photo " + name}
                                loading="lazy"
                            />}
                            <CastName>{name}</CastName>
                            <CastCharacter>Character: {character}</CastCharacter>
                        </CastListItem>
                    ))}
                </CastList>
            }
        </div>
    );
};
