function C4() {
  const arr = ["Raj", "Rahul", "Shankar", "George", "Kevin"];

  const Listitems = () => {
    return arr.map((val) => {
      return <li>{val}</li>;
    });
  };
  return (
    <div>
      <h1>List items in react</h1>
      <ol>{Listitems()}</ol>
    </div>
  );
}

export default C4;
