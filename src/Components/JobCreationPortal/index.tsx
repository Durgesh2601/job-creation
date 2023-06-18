import { useCallback, useEffect, useState } from "react";
import { useJobCreationPortalStyles } from "../../Styles/JobCreationPortalStyles";
import JobCreationHeader from "./Header";
import SectionDetails from "./SectionDeatils";

interface DataItem {
  id: number;
  title: string;
  fields: {};
}

interface Data {
  [key: string]: DataItem;
}

const JobCreationPortal = () => {
  const [data, setData] = useState<Data>({});
  const { classes } = useJobCreationPortalStyles();

  const getData = useCallback(async () => {
    const URL = `http://localhost:3000/get_details`;
    const data = await fetch(URL);
    const response = await data?.json();
    setData(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.mainContainer}>
      <JobCreationHeader />
      <div className={classes.sectionMainContainer}>
        {Object.keys(data)?.map((item: any) => (
          <SectionDetails data={data?.[item]} key={data?.[item]?.id} />
        ))}
      </div>
    </div>
  );
};

export default JobCreationPortal;
