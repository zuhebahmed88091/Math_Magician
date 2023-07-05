const numArr = ['AC', '+/-', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
const Numbers = () => (
  <div className="numberItems">
    {numArr.map((number) => (
      <div className="button" key={number}>
        { number }
      </div>
    ))}
  </div>
);

export default Numbers;
