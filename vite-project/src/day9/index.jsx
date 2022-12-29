import { useMemo, useState } from "react";
import { products } from "./products";
import { isMatchingCharacter } from "./ismatchingchar";

const UseMemoV0 = () => {
  const [todos, setTodos] = useState(products);
  const [search, setSearch] = useState("");

  const filteredResult = useMemo(() => {
    const result = todos.filter((item) => {
      const { title, description, category } = item;

      if (isMatchingCharacter(title, search)) {
        return true;
      }

      if (isMatchingCharacter(description, search)) {
        return true;
      }

      if (isMatchingCharacter(category, search)) {
        return true;
      }

      return false;
    });

    console.log("@AJ Search Result", result);
    return result;
  }, [search]);

  console.log("Re-Rendering");
  return (
    <>
      <div>
        <input
          type={"search"}
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h1>My Products</h1>
        <ul>
          {filteredResult.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default UseMemoV0;