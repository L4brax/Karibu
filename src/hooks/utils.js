import React, { useEffect, useState } from "react";

export const useListRefsFromSteps = (steps) => {
  const [refs, setRefs] = useState({});

  useEffect(() => {
    setRefs(
      steps.reduce((acc, step) => {
        acc[step.id] = React.createRef();
        return acc;
      }, {})
    );
  }, [steps]);

  return refs;
};
