import Concept from "./Concept/Concept";

function Concepts({items}) {
  const conceptItems = items.map((item) => 
    <Concept title={item.title} image={item.image} description={item.description} />
  );

  return (
      <ul id="concepts">{conceptItems}</ul>
  );
}

export default Concepts;
