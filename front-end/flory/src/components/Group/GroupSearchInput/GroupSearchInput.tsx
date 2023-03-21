import React, { useEffect, useState } from "react";
import MapSearchInput from "../../Map/MapSearchInput/MapSearchInput";

const GroupSearchInput = () => {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    if (keyword.length !== 0) {
      console.log(keyword);

      setKeyword("");
    }
  }, [keyword]);

  return (
    <div>
      <MapSearchInput
        // keyword={keyword}
        setKeyword={setKeyword}
        // onClickHere={onClickHere}
        page="group"
      />
    </div>
  );
};

export default GroupSearchInput;
