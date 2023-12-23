import formText from '../components/formText.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formText,
  title: 'oth/formText',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formText },
    setup() {
      return { args };
    },
    template: '<formText v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};