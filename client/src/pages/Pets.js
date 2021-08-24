import React, { useState, useEffect } from "react";
import PetBox from "../components/PetBox";
import NewPet from "../components/NewPet";
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo';
import Loader from "../components/Loader";
import PetsList from '../components/petslist';

const ALL_PETS = gql`
  query AllPets {
    pets {
      id
      name
      type
      img
    }
  }
`;

const CREATE_PET = gql`
  mutation createAPet($newPet: newPetInput) {
    addPet(input: $newPet) {
      id
      name
      type
      img
    }
  }
`;

export default function Pets() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(ALL_PETS);
  const [createPet, newPet] = useMutation(CREATE_PET);

  const onSubmit = (input) => {
    setModal(false);
    createPet({"newPet": {"name": "batman", "type": "DOG"}})
  };

  if(loading || newPet.loading) {
    return Loader
  }

  if (error || newPet.error) {
    return <p>error!</p>
  }



  if (modal) {
    return (
      <div className="row center-xs">
        <div className="col-xs-8">
          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row"><PetsList pets={data.pets}/></div>
      </section>
    </div>
  );
}
