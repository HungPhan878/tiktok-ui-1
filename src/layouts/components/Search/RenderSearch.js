// framework
import { memo } from "react";

// components
import AccountItem from "../AccountItem";

function RenderSearch({ data }) {
  return (
    <>
      {data.map((result) => (
        <AccountItem key={result.id} data={result} />
      ))}
    </>
  );
}

export default memo(RenderSearch);
