import React from "react";
import useFetch from "../../../Hooks/useFetch";
import { STATS_GET } from "../../../data/api";
import Head from "../../../Helper/Head";
import Loading from "./Loading";
import Error from "../../../Helper/Error";
import UserStatsGraph from "./UserStatsGraph";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraph"));

const Stats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <div>
          <Head title="Estatisticas" />
          <UserStatsGraph data={data} />
        </div>
      </React.Suspense>
    );
  else return null;
};

export default Stats;
