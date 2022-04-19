

export default function About() {

    return (
    <div style={{ textAlign: 'center' }}>
        <h1 id="aboutTitle">Las Vegas Jiu-Jitsu</h1>
        <img src={process.env.PUBLIC_URL + './images/lvjj.png'} height="605px" width="675px" alt="lvjj logo" class="img-fluid" />
        <br />
        <br />
        <div className="aboutContainer">
            <h4>"Professor Cresencio and his LVJJ dojo primarily trains and teaches 1st responders, officers and even active duty military personnel in the art of jiu-jitsu and he is one of the officers who are pushing to get police departments to add Brazilian Jiu-Jitsu to their academy curriculum to aid police and 1st responders in safe and efficient suspect apprehension" - Professor D</h4>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>
    )
}