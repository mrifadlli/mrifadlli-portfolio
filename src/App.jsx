import {
  Navbar,
  Home,
  Experience,
  Contact,
  SocialLink,
  Portfolio,
} from "./components/index";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <Experience />
      <SocialLink />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
