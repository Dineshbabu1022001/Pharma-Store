import { useState, useMemo } from "react";
import useProducts from "../hooks/Products/useProducts";
import Sidebar from "../components/layout/Sidebar";
import ProductCard from "../components/layout/ProductsCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import type { Products } from "../types/product";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
};

const Shop = () => {
  const { data: products = [], isLoading } = useProducts();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categoryOptions = useMemo<string[]>(() => {
    return [...new Set(products.map((p: Products) => p.category))] as string[];
  }, [products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product: Products) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <Sidebar
          categoryOptions={categoryOptions}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop</h2>
          {isLoading ? (
            <p>Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product: ProductProps) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products match your filters.</p>
          )}
        </main>
      </div>
      <div className="mt-10">
        <Footer />
    </div>
    </div>
  );
};

export default Shop;
