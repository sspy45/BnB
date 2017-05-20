import React from 'react';
import { connect } from 'react-redux';
import { convertPets } from '../../../reducers/selectors';
import PetsIndex from './pets_index';
import {
  createPet,
  editPet,
  removePet,
  fetchPets,
  fetchPetTypes} from '../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    session: state.session,
    pets: convertPets(state.user_details),
    petTypes: state.user_details.pet_types || []
  };
};

const mapDispatchToProps = (dispatch, {pets}) => {
  return {
    createPet: (pet) => dispatch(createPet(pet)),
    editPet: (id) => dispatch(editPet(id)),
    removePet: (pet) => () => dispatch(removePet(pet)),
    fetchPetTypes: () => dispatch(fetchPetTypes()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PetsIndex);
