import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import { connect } from "react-redux";
import changeTheme from "./actionCreators/changeTheme";
import changeLocation from "./actionCreators/changeLocation";

const SearchParams = (props) => {
  const [location, setLocation] = useState("Seattle,WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed(" ");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location{" "}
          <input
            id="Location"
            value={props.location}
            placeholder="location"
            onChange={(e) => props.setLocation(e.target.value)}
          ></input>{" "}
        </label>{" "}
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme{" "}
          <select
            value={props.theme}
            onChange={(e) => props.setTheme(e.target.value)}
            onBlur={(e) => props.setTheme(e.target.value)}
          >
            <option value="peru"> peru </option>{" "}
            <option value="darkblue"> darkblue </option>{" "}
            <option value="mediumorchid"> mediumorchid </option>{" "}
            <option value="chartreuse"> chartreuse </option>{" "}
          </select>{" "}
        </label>{" "}
        <button
          style={{
            backgroundColor: props.theme,
          }}
        >
          {" "}
          Submit{" "}
        </button>{" "}
      </form>{" "}
      <Results pets={pets} />{" "}
    </div>
  );
};
const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
});
const mapDispatchProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme)),
  setLocation: (location) => dispatch(changeLocation(location)),
});
export default connect(mapStateToProps, mapDispatchProps)(SearchParams); // conect returns a function we invoked
// it with searchParams
