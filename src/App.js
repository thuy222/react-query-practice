import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Home from "./components/Home";
import SuperHeros from "./components/SuperHeros";
import ReactQuerySuperHeros from "./components/ReactQuerySuperHeros";
import RQSuperHero from "./components/RQSuperHero";

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
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeros />} />
            <Route path="/rq-super-heroes" element={<ReactQuerySuperHeros />} />
            <Route path="/rq-super-heroes/:id" element={<RQSuperHero />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
