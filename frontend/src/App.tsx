import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
