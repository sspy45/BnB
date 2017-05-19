import React from 'react';
import { connect } from 'react-redux';
import { asArray } from '../../../reducers/selectors';
import PetsIndex from './pets_index';
import {createPet,
        editPet,
        removePet,
        fetchPets,
        fetchPetTypes} from '../../../actions/user_actions';

const mapStateToProps = (state) => ({
  session: state.session,
  pets: asArray(state.user_details)
});

const mapDispatchToProps = (dispatch, {pets, pet_types}) => {
  return {
    createPet: (pet) => dispatch(createPet(pet)),
    editPet: (id) => dispatch(editPet(id)),
    removePet: (pet) => () => dispatch(removePet(pet)),
    fetchPetTypes: () => dispatch(fetchPetTypes()),
    pet_types: pet_types || []
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsIndex);
