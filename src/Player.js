import Human from "./Human"

function Player(props) {
    return (
        <div>
            <h1> Player</h1>
            <p>Location: {props.location}</p>
            <Player position="Small Forward"/>
        </div>
    )
}

export default Player;