import TextField from "./TextField";

export default {
    title:"MyComponents/textfield",
    component:"input"
}

 const Template = (args)=><TextField {...args} />

 export const Primary = Template.bind({});
 Primary.args = {
     placeholder:"something",
     primary:true

 }

 export const Secondary = Template.bind({});
 Secondary.args = {
    placeholder:"something2"

 }