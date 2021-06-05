import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import "./TinderCards.css";

function TinderCards() {
    const [people] = useState([
        {
            name: "Geetha",
            url: "https://www.google.com/search?q=images+of+nature&sxsrf=ALeKk00xeDQ0ol8lyk7aD91YkpTUAmKkLw:1622895296764&tbm=isch&source=iu&ictx=1&fir=UVAHTXdge9JbrM%252CtnVTsEa64LdCyM%252C_&vet=1&usg=AI4_-kQokH8Lhj4fy3zPHyUWP-Z51VeAJA&sa=X&ved=2ahUKEwiEgq-NvIDxAhUHlEsFHQuoCQUQ9QF6BAgLEAE#imgrc=UVAHTXdge9JbrM",
        },
        {
            name: "Sharu",
            url: "https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
    };
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={people.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, people.name)}
                        onCardLeftScreen={() => outOfFrame(people.name)} >
                        <div style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard >
                ))}
            </div>
        </div>
    );
}

export default TinderCards;