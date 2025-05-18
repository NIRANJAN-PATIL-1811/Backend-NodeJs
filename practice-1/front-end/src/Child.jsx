
function Child({mydata, getData}) {
  let childData = "This is child";
  return (
    <>
      <h1>{mydata}</h1>
      {
        getData(childData)
      }
    </>
  );
}

export default Child;