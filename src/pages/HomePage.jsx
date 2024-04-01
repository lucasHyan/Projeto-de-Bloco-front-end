import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { SecondBanner } from "../layout/SecondBanner";
import { ContentCards } from "../layout/ContentCards";
import { SiteDescription } from "../layout/SiteDescription";
import { Footer } from "../layout/Footer";
import { Form } from "../layout/Form";

export function HomePage() {
  return (
    <>
      <AppBar />
      <Banner />
      <ContentCards />
      <Footer />
    </>
  );
}