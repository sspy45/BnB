import React from 'react';
import { connect } from 'react-redux';
import PetsIndex from './pets_index';
import {createPet,
        editPet,
        removePet,
        fetchPetTypes} from '../../../actions/user_actions';

const mapStateToProps = ({ session }) => (
  session
);

const mapDispatchToProps = (dispatch, {pets, pet_types}) => {
  return {
    createPet: (pet) => dispatch(createPet(pet)),
    editPet: (id) => dispatch(editPet(id)),
    removePet: (pet) => () => dispatch(removePet(pet)),
    fetchPetTypes: () => dispatch(fetchPetTypes()),
    pets,
    pet_types
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsIndex);
