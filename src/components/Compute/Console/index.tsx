import { Suspense, lazy } from "react";
import LoadingComponent from "../../LoadingComponent";

// To tree shake any test features in TestBench
const L = lazy(() => import("./Console"));
// const L = () => <></>;

const LazyLiveStats = props => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <L {...props} />
    </Suspense>
  );
};

export default LazyLiveStats;
