type SidebarProps = {
  categoryOptions: string[];
  selectedCategories: string[];
  onCategoryChange: (value: string) => void;
};

const Sidebar = ({
  categoryOptions,
  selectedCategories,
  onCategoryChange,
}: SidebarProps) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Filter by Category</h2>

      <div className="space-y-4">
        {categoryOptions.map((category) => (
          <label
            key={category}
            className="flex items-center space-x-3 text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200"
          >
            <input
              type="checkbox"
              className="accent-green-600 h-4 w-4"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <span className="text-sm capitalize">{category}</span>
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
