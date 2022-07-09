import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function useSuperHeroesData(onSuccess, onError) {
  return useQuery("super-heroes", fetchSuperheroes, {
    onSuccess: onSuccess,
    onError: onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
}

export default useSuperHeroesData;
