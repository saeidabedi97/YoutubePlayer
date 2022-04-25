import Button from './ButtonForSearch'

export default{
    title:'MyComponents/Button',
    component:Button,
}

const Template = (args) =><Button {...args}/>;
export const Primary = Template.bind({}); 
Primary.args = {
    children:"Search"
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Don't Click me"
}
export const Ternary = Template.bind({});
Ternary.args = {
    label:"Click if you want"
}
