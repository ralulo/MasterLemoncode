import React from "react";
import { Link, useParams } from "react-router-dom";
import {MemberApiEntity} from "./list-api";

export const DetailPageApi: React.FC = () => {
  const {id} = useParams();
  const [detail, setDetail] = React.useState<MemberApiEntity>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al cargar el detalle ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setDetail(data);  
      })
  }, []);

  return (
    <>
    <div >
    <h2>Detail page</h2>
      
      <ul>
        {detail &&        
            <li key={detail.id}>
            <img src={detail.image} />
              <h3>Name: {detail.name}</h3>
              <h3>Gender: {detail.gender}</h3>
              <h3>Origin: {detail.origin.name}</h3>
              <h3>Species: {detail.species}</h3>
              <h3>Status: {detail.status}</h3>
            </li>
          }
          <Link to="/list-api">Back to list page</Link>
      </ul>
    </div>
    </>
  );
};


