import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperheroes = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

function DynamicParallel({ ids }) {
  const queryResults = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperheroes(id),
      };
    })
  );

  console.log({ queryResults });

  return <div>DynamicParallel</div>;
}

export default DynamicParallel;
