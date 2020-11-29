const Result = (props) => {
  return (
    <div className="Result">
      <h3>Ergebnis:</h3>
      <ul>
        {props.result.map((element, i) => {
          return (
            <li>
              {i}:{element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
