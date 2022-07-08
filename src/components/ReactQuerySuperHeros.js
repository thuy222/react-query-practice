import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function ReactQuerySuperHeros() {
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperheroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>React Query SuperHeros</div>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
}

export default ReactQuerySuperHeros;
