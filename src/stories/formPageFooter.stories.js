import formPageFooter from '../components/formPageFooter.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formPageFooter,
  title: 'Content/formPageFooter',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formPageFooter },
    setup() {
      return { args };
    },
    template: '<formPageFooter v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};