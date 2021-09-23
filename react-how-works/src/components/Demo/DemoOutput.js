import React, {useMemo} from "react";

const DemoOutput = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items])
  console.log(`Demo is...`)
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoOutput);
