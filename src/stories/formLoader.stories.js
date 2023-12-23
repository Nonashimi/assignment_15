import formLoader from '../components/formLoader.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formLoader,
  title: 'oth/formLoader',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formLoader },
    setup() {
      return { args };
    },
    template: '<formLoader v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};