import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

function ParallelQueries() {
  useQuery("super-heroes", fetchSuperheroes);
  useQuery("friends", fetchFriends);

  return <div>ParallelQueries</div>;
}

export default ParallelQueries;
