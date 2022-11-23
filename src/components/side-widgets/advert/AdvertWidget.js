import "./AdvertWidget.css"
import ad1 from "../../../assets/images/ad1.png";
import ad2 from "../../../assets/images/advertisement.png";
import ad3 from "../../../assets/images/ad3.jpg";

export default function AdvertWidget() {
    return (<div>
        <div className={"advert-widget"}><img src={ad1} alt="Advertisement"/></div>
        <div className={"advert-widget"}><img src={ad2} alt="Advertisement"/></div>
        <div className={"advert-widget"}><img src={ad3} alt="Advertisement"/></div>
    </div>)
}