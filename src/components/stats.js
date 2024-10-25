export default function Stats({ item }) {
  let num = item.length;
  let numPacked = item.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / num) * 100);
  if (!item.length) {
    return (
      <footer className="stats">
        <em>Starts adding some items to your packing list </em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!, Ready to go"
          : `You have ${num} item on your list, and you have already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
