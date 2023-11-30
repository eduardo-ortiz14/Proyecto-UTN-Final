import "./CategoryFilter.css";

function CategoryFilter({ categories, onSelectCategory }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
