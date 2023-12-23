import formGridSystem from '../components/formGridSystem.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formGridSystem,
  title: 'oth/formGridSystem',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formGridSystem },
    setup() {
      return { args };
    },
    template: '<formGridSystem v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};