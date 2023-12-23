import formList from '../components/formList.vue';

//👇 This default export determines where your story goes in the story list
export default {
  component: formList,
  title: 'Content/formList',
  tags: ['autodocs'],
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const FirstStory = {
  render: (args) => ({
    components: { formList },
    setup() {
      return { args };
    },
    template: '<formList v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};