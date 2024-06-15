import { FC } from "react";
import TagApp from "components/TagApp";
import {availableTags} from "constans/data";


const Home: FC = () => (
    <TagApp availableTags={availableTags} />
);
export default Home;
