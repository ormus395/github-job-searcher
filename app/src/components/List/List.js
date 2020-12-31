import ListItem from "../ListItem/ListItem";

import "./list.css";

const List = ({ data, card }) => {
  let Card = card;
  let jobs = data.map((job) => (
    <ListItem>
      <Card
        logo={job.company_logo}
        subTitle={`${job.created_at} ${job.type}`}
        title={job.title}
        company={job.company}
        location={job.location}
      />
    </ListItem>
  ));
  return <ul className="list">{jobs}</ul>;
};

export default List;
