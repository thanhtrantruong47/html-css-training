import {
  Arrivals,
  Banner,
  Brand,
  Browse,
  Comment,
  Footer,
  Header,
  SignUpNotification,
  TopSelling,
} from "../components";

export const getNewArrivals = async () => {
  const arrivals = await fetch(
    "http://localhost:8000/products/?limit=4&ordering=-created_at"
  );
  return arrivals.json();
};

export const getTopSelling = async () => {
  const arrivals = await fetch(
    "http://localhost:8000/products/?limit=4&ordering=-number_of_purchases"
  );
  return arrivals.json();
};

export const getStaticProps = async () => {
  const newArrivals = await getNewArrivals();
  const topSelling = await getTopSelling();

  return { props: { newArrivals, topSelling } };
};

export default function Home({ newArrivals, topSelling }) {
  return (
    <>
      <SignUpNotification />
      <Header />
      <Banner />
      <Brand />
      <Arrivals items={newArrivals} />
      <TopSelling items={topSelling} />

      <div className="container">
        <Browse />
        <Comment />
      </div>

      <Footer />
    </>
  );
}
