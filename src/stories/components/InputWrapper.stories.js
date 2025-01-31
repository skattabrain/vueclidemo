import InputWrapper from '@/components/InputWrapper.vue';

export default {
  component: InputWrapper,
  title: 'Components/Input Wrapper',
  argTypes: {
    disabled: { control: 'boolean', name: 'Is disabled?' },
    showWithOtherControls: { control: 'boolean', name: 'Show with other controls' },
    showError: { control: 'boolean', name: 'Show error message' },
    help: { control: 'text', name: 'Help Text' },
    label: { control: 'text', name: 'Label' },
    error: { control: 'text', name: 'Error text' },
    optional: { control: 'boolean', name: 'Optional field' },
  },
  args: {
    disabled: false,
    showWithOtherControls: false,
    showError: false,
    help: 'Enter your last name here. If this is a problem, sorry but we can\'t help you.',
    label: 'Last Name',
    error: 'Seriously bro... your last name here',
    optional: false,
  }
};

export const Text = (args) => ({
  components: { InputWrapper },
  props: {
    disabled: {
      default: args.disabled,
    },
    showWithOtherControls: {
      default: args.showWithOtherControls,
    },
    showError: {
      default: args.showError,
    },
    help: {
      default: args.help,
    },
    label: {
      default: args.label,
    },
    error: {
      default: args.error,
    },
    optional: {
      default: args.optional,
    }
  },
  computed: {
    errorMessage() {
      return this.showError ? this.error : null
    }
  },
  template: `
<div>
  <input-wrapper v-if="showWithOtherControls" class="mb-6" label="First Name" help="If you do not know your first name, please seek professional help.">
    <input class="form-input w-full" type="text" placeholder="John">
  </input-wrapper>

  <input-wrapper :is-disabled="disabled" class="my-6" :error="errorMessage" :label="label" :help="help" :optional="optional">
    <input :disabled="disabled" class="form-input w-full" type="text" placeholder="Doe">
  </input-wrapper>

  <input-wrapper v-if="showWithOtherControls" class="my-6" label="Email" help="So we can SPAM the shit out of you.">
    <input class="form-input w-full" type="text" placeholder="johndoe@example.com">
  </input-wrapper>

  <button v-if="showWithOtherControls" type="button" class="btn mt-6 w-full">Submit</button>
</div>
`
});
