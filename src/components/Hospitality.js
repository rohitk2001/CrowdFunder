import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Hospitality = () => {
    return (
        <Fragment>
            <h1>Hospitality page</h1>
            <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
            <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
            <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
        </Fragment>
    );

};

export default Hospitality;