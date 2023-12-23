import FormAccardion from '../components/FormAccardion.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: FormAccardion,
   title: 'Containers/FormAccardion',
   tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { FormAccardion },
    setup() {
      return { args };
    },
    template: '<FormAccardion v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};