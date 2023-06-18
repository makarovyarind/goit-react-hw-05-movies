import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getCastInfo, IMAGE_URL } from '../../services/api';
import './Cast.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();


  useEffect(() => {
    getCastInfo(movieId).then((request) => setCast(request.cast));
  }, [movieId]);

  console.log(cast);

  return (
    <ul className="Cast">
      {cast.map((item) => (
        <li key={item.id} className="CastItem">
          <img src={IMAGE_URL + item.profile_path} alt={item.name} className="CastItem_img" />
          <p className="CastItem_text">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}