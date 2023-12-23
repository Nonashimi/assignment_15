import groupButton from '../components/groupButton.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: groupButton,
   title: 'Button/groupButton',
   tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { groupButton },
    setup() {
      return { args };
    },
    template: '<groupButton v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};