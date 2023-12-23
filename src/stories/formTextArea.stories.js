import fromTextArea from '../components/fromTextArea.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: fromTextArea,
//   title: 'Select/formSelect',
//   tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { fromTextArea },
    setup() {
      return { args };
    },
    template: '<fromTextArea v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};