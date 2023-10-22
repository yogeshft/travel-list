export function Stats({ items }) {
  //items.length ?
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "everything is packed!"
          : `You have ${numItems} items on you are list, and you already packed
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
