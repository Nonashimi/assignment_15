import formTabs from '../components/formTabs.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formTabs,
  title: 'Content/formTabs',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formTabs },
    setup() {
      return { args };
    },
    template: '<formTabs v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};