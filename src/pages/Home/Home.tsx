import { FC } from "react";
import TagApp from "components/TagApp";
import {data} from "constans/data";


const Home: FC = () => (
    <TagApp data={data} />
);
export default Home;
