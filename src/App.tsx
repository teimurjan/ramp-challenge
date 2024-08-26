import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Flag from "./Flag";
import Loader from "./Loader";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Flag />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
