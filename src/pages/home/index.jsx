import NameScreen from "../../components/name-screen";
import InformationCard from "./components/information-card";
import MapAction from "./components/map-action";
import TableTravel from "./components/table-travel";

const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <NameScreen nameScreen="Dashboard" />
        <section className="content">
          <InformationCard />
        </section>
        <section className="content">
          <MapAction />
          <TableTravel />
        </section>
      </div>
    </>
  );
};

export default Home;
