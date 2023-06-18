import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieReview } from '../../services/api';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReview(movieId).then((request) => setReviews(request.cast));
      }, [movieId]);

    return (
        <>
            {reviews ? (
                <ul>
                    {reviews.map(item=> 
                        (<li key={item.id}>
                            <p><span>Author: </span>{item.author}</p>
                            <p>{item.content}</p>
                        </li>)
                    )}
                </ul>
            ) : <div>No reviews</div>}
        </>
    )
};