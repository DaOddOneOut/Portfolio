import "./works.scss"

export default function Works () {
    return (
        <div className ="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/Animation.png"/>
                                </div>
                                <h2>Skill Sets</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p>
                                
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                        <div className="rightContainer">
                                <div className="imgeContainer">
                                    <img src="assets/skills_BG.png" width="100%" height="100%"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}