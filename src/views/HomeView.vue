<template>
  <div class="home-container">
    <h1>Pet Adoption</h1>
    <h4>Total of Animals: {{ animalsCount }} </h4>
    <hr>
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pets Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.breed"
          placeholder="Enter breed"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pets Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pets Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male','female']"
          required
        ></b-form-select>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="Pets Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.color"
          placeholder="Enter color"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
          placeholder="Enter weight"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.location"
          placeholder="Enter location"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Notes:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="formData.notes"
          placeholder="Enter notes"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, age, name, breed, gender, color, weight, location, notes } = this.formData
      const payload = {
        species,  
        pet: {
          name,
          age,
          breed,
          gender,
          color, 
          weight,
          location,
          notes,
          species
        }
      }

      this.addPet(payload)

      //reset the form after submit
      this.formData = {
        name: '',
        age : 0,
        species: null,
        breed: '',
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  }
}
</script>
