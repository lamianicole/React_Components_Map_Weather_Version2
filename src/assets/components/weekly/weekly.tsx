import Tag from "../tag/Tag";

const Weekly = () => {
    return (
        <div className="wrap">
            {weather.map((day, index) => (
                <Tag key={index} weatherDay={day}/>
            ))}
        </div>
    );
}

export default Weekly;

// hier die Wetterdaten für eine Woche: Objekt mit vier Eigenschaften
const weather = [
    { day: "Montag", temperature: 22, condition: "Sonnig", emoji: "☀️" },
    { day: "Dienstag", temperature: 19, condition: "Wolkig", emoji: "☁️" },
    { day: "Mittwoch", temperature: 24, condition: "Sonnig", emoji: "☀️" },
    { day: "Donnerstag", temperature: 18, condition: "Regnerisch", emoji: "☔"},
    { day: "Freitag", temperature: 21, condition: "Teilweise bewölkt", emoji: "⛅" },
    { day: "Samstag", temperature: 12, condition: "Wolkig", emoji: "☁️" },
    { day: "Sonntag", temperature: 11, condition: "Sonnig", emoji: "☀️" },
];