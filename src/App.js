import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import ReactQuerySuperHeros from "./components/ReactQuerySuperHeros";
import RQSuperHero from "./components/RQSuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel";
import DependentQueries from "./components/DependentQueries";
import {
  PaginatedQueries,
  PaginatedQueriesPage,
} from "./components/PaginatedQueries";
import { InfiniteQueries } from "./components/InfiniteQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">React Query Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">React Query Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">React Query Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Dependent</Link>
              </li>
              <li>
                <Link to="/rq-paginated">RQ Pagination</Link>
              </li>
              <li>
                <Link to="/rq-infinite">RQ Infinite</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/super-heroes" element={<SuperHeros />} />
            <Route path="/rq-super-heroes" element={<ReactQuerySuperHeros />} />
            <Route path="/rq-super-heroes/:id" element={<RQSuperHero />} />
            <Route path="/rq-parallel" element={<ParallelQueries />} />
            <Route path="/rq-paginated" element={<PaginatedQueries />} />
            <Route path="/rq-infinite" element={<InfiniteQueries />} />
            <Route
              path="/rq-dependent"
              element={<DependentQueries email="hongocthuyy222@gmail.com" />}
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel ids={[1, 3]} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
