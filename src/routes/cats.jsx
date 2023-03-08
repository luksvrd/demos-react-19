// pass catsDate in as a prop. This is similar to the way youd do it in real world react
import PropTypes from "prop-types";
import CatCard from "../components/CatCard";

export default function Cats({ catsData }) {
  return (
    <main className="container mx-auto space-y-8">
      <section>
        <h2>🐱</h2>
        <div className="cards-container grid-cols-5">
          {catsData.map((cat) => {
            return <CatCard cat={cat} key={cat.id} />;
          })}
        </div>
      </section>
    </main>
  );
}

Cats.propTypes = {
  catsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  isRequired,
};
