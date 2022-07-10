import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSuperheroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheroes", hero);
  return request({ url: "/superheroes", method: "post", data: hero });
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

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("super-heroes");
    //   queryClient.setQueriesData("super-heroes", (oldQueryData) => {
    //     //oldQueryData is what present in cached
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },

    //onMuate is call before mutation function is fired and is passed the same variables
    //the mutation function would recieve
    onMutate: async (newHero) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries("super-heroes");

      //get whole current data before making any update.This will help to roll back
      //in case the mutation fail
      const previousHeroData = queryClient.getQueryData("super-heroes");

      //update the query data
      queryClient.setQueriesData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });

      //roll back data in case mutation error
      return {
        previousHeroData,
      };
    },

    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heroes", context.previousHeroData);
    },

    //// Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries("super-heroes");
    },
  });
};
