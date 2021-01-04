import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Toggle from "./components/Toggle/Toggle";
import SearchBar from "./components/SearchBar/SearchBar";

import List from "./components/List/List";
import Card from "./components/Card/Card";

function App() {
  // fetch by pagination
  // fetches 50, but original paige only loads 12,
  // need to keep track of how many are loaded, and the amount on screen
  // load more button will client paginate til all 50 have been loaded
  // then once 50 has been hit, paginate the api
  const [state, setState] = useState([]);
  const [jobsLoaded, setJobsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
    )
      .then((resp) => resp.json())
      .then((json) => {
        if (!jobsLoaded) {
          setJobsLoaded(true);
          setState(json);
        }
      })
      .catch((err) => console.log(err));
  }, [jobsLoaded, error]);

  const buildJobs = () => {
    let jobs = [];

    if (jobsLoaded) {
      for (let i = 0; i < 12; i++) {
        let job = state[i];
        jobs.push(
          <li>
            <Card
              logo={job.company_logo}
              subTitle={`${job.created_at} ${job.type}`}
              title={job.title}
              company={job.company}
              location={job.location}
            />
          </li>
        );
      }
    }

    return jobs;
  };

  return (
    <div className="App">
      <Header>
        <h3>devjobs</h3>
        <SearchBar />
        <Toggle />
      </Header>
      <main className="main contain">
        {error ? (
          "We're sorry, it looks like an error occured."
        ) : jobsLoaded ? (
          <List data={state} card={Card} />
        ) : (
          "Loading..."
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
