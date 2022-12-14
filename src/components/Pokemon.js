export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>
        Abilities: ({props.abilities.length})
        <ul>
          {props.abilities.map((ability, index) => {
            return <li key={index}>{ability}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}
