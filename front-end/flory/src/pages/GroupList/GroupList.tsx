import React, { useEffect, useState } from "react";
import BackButton from "../../components/common/BackButton/BackButton";
import GroupSearchInput from "../../components/Group/GroupSearchInput/GroupSearchInput";
import GroupUnJoinList from "../../components/Group/GroupUnJoinList/GroupUnJoinList";
import { getAllGroupAction } from "../../redux/modules/group";
import { useAppDispatch } from "../../redux/store.hooks";
import { SMain } from "./styles";

const GroupList = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getAllGroupAction());
      setData(res.payload);
    };

    fetchData();
  }, [dispatch]);

  console.log(data);

  return (
    <SMain>
      <div className="search__wrapper">
        <BackButton color="black" />
        <GroupSearchInput />
      </div>
      <div className="grouplist__wrapper">
        <GroupUnJoinList />
      </div>
    </SMain>
  );
};

export default GroupList;
