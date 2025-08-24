export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list </em>
      </p>
    );

  const numItem = items ? items.length : 0;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything ready to go`
          : `You have ${numItem} items on your list, You already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
