import Button from "components/Button/Button"

export default {
  title: "Button",
  component: Button
}

const Template = args => <Button {...args} />

export const Green = Template.bind({})

Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md'
}