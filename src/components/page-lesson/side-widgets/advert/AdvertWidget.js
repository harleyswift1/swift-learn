import ad1 from "../../../../assets/images/ad1.png";
import ad2 from "../../../../assets/images/advertisement.png";

export default function AdvertWidgets() {
    return (<div className={"advert-widgets"}>
        <div className={"advert-widget"}><img src={ad1} alt="Advertisement"/></div>
        <div className={"advert-widget"}><img src={ad2} alt="Advertisement"/></div>
    </div>)
}