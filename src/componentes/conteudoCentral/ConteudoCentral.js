import Feed from "./feed/Feed"
import Stories from "./story/Stories"
import "./story/Story.css"
export default function ConteudoCentral(){
    return(
        <>
        <div className="containerCental">
        <div className="containerStory">
            <Stories/>
        </div>
        <Feed/>
        </div>
        </>
    )
}