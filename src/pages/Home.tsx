import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/9hFrQqt/medicine-home-banner.png')`,
      }}
    >
      <Header />

      <div className="flex flex-col items-center justify-center text-center pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your medication, delivered
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Say goodbye to all your healthcare worries with us
        </p>

        <div className="flex mt-8 bg-white rounded-full shadow-lg overflow-hidden w-full max-w-xl">
          <input
            type="text"
            placeholder="Search your medicine from here"
            className="flex-grow px-6 py-3 text-gray-700 outline-none"
          />
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 text-white font-semibold">
            Search
          </button>
        </div>

        <p className="text-teal-600 mt-6 font-medium">
          Take care of your healthcare now!
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
