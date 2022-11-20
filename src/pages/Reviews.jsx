import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { getTmdbMovieIdReviews } from "services/api"

export const Reviews = () => {
    const { movieId } = useParams();
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        setLoading(true);

        getTmdbMovieIdReviews(movieId)
            .then(data => {
                const reviews = data.data.results;
                //console.log('Reviews', reviews);
                setReviews(reviews);
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
            {loading === false && reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
            {reviews.length > 0 && 
                <ul>
                    {reviews.map(({ author, content }, index) => (
                        <li key={index}>
                            <p><b>Author: {author}</b></p>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};
