interface ITagProps {
    weatherDay: {
        day: string,
        temperature: number,
        condition: string,
        emoji: string
    }
}

const Tag: React.FC<ITagProps> = (props) => {

    return (
        <div className="wrap-tag">
            <h3>{props.weatherDay.day}</h3>
            <h1>{props.weatherDay.temperature}°C</h1>
            <p>{props.weatherDay.condition}</p>
            <p>{props.weatherDay.emoji}</p>
        </div>
);
}

export default Tag;