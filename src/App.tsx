import { Header, Hero, Solutions, Contact, Footer } from "./components/Landing";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
