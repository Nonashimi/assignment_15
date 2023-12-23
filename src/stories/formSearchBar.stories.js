import formSearchBar from '../components/formSearchBar.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formSearchBar,
  title: 'nav/formSearchBar',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formSearchBar },
    setup() {
      return { args };
    },
    template: '<formSearchBar v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};