import StatWidget from "./stat-widget/StatWidget";
import Button from "../utils/reusable/Button/Button";



export default function ProfilePage() {

    return (<div className={"main-component"}>
        <div className="profile-page">
            <h1>Your Profile</h1>
            <section className="profile-page-stats-widgets">
                <StatWidget title={"Trophy points"} bigStat={193} subStat={""} description={"You have achieved 193 trophy points"}/>
                <StatWidget title={"Hours spent"} bigStat={4} subStat={""} description={"You have spent 4 hours learning PHP on SwiftLearn!"}/>
                <StatWidget title={"Lessons completed"} bigStat={46} subStat={"/129"} description={"You have completed 46 lessons out of 129 total lessons!"}/>
                <StatWidget title={"Challenges completed"} bigStat={12} subStat={"/53"} description={"You have completed 46 challenges out of 129 total challenges!"}/>
            </section>
            <h3>Harley Swift</h3>
            <p>Here you can edit your profile information and settings</p>
            <section>
                <div className="profile-field">
                    <h4>Username</h4>
                    <input type="text" name={"username_input"} id={"settings_username_input"}/>
                </div>
                <div className="profile-field">
                    <h4>Bio</h4>
                    <textarea name={"bio_input"} id={"bio_input"}/>
                </div>
                <div className="profile-field">
                    <h4>Display Name</h4>
                    <input type="text" name={"displayname_input"} id={"settings_displayname_input"}/>
                </div>

                <div className="profile-field">
                    <h4>Phone Number</h4>
                    <input type="text" name={"phone_input"} id={"settings_phone_input"}/>
                </div>
                <div className="profile-field">
                    <h4>Email Address</h4>
                    <input type="text" name={"email_input"} id={"settings_email_input"}/>
                </div>
                <Button text={"Save"} bg={"#7F92FF"} color={"#0E1013"}/>
            </section>
        </div>
    </div>)
}