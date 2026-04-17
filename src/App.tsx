import { Header, Hero, Solutions, Features, Contact, Footer } from "./components/Landing";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
