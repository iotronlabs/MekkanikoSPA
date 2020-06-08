import Vue from 'vue';
import {
  extend,
  ValidationProvider
} from 'vee-validate';
import {
  setInteractionMode
} from 'vee-validate';
import {
  required,
  max,
  digits
} from 'vee-validate/dist/rules';

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('max', {
  ...max,
  message: '{_field_} can not be greater than {length} characters'
})
extend('digits', {
  ...digits,
  message: '{_field_} must be numbers not greater than {length} characters'
})
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider);
