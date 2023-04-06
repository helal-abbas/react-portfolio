import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Helal Abbas",
    location: "Lucknow, Uttar Pradesh, India",
    email: "helal.abbas110@gmail.com",
    availability: "Open for work",
    brand:
      "Highly skilled and motivated full-stack developer with over 2 years of experience in MERN and MEAN stack development. Seeking to leverage my expertise in building scalable and efficient web applications to contribute to a dynamic team that values innovation and continuous learning. With a strong foundation in front-end and back-end development, I am committed to delivering high-quality code and exceptional user experiences.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
