import { useEffect, useState } from "react";

import Header from "./components/Header/Header";

import List from "./components/List/List";
import Card from "./components/Card/Card";

function App() {
  const [state, setState] = useState([]);
  const [jobsLoaded, setJobsLoaded] = useState(false);

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
      });
  }, [jobsLoaded]);

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
        <p>Toggle</p>
      </Header>
      <main className="main contain">
        {jobsLoaded ? <List data={state} card={Card} /> : "Loading..."}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
