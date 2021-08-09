import { FormWrapper, Input, Textarea, Button } from "../styles/formStyles";

const Form = (props) => {
  return (
    <FormWrapper onSubmit={props.handleSubmit}>
      <Input
        onChange={props.handleChange}
        value={props.value.name || ""}
        name="name"
        placeholder="Name"
        type="text"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.type || ""}
        name="type"
        placeholder="Type"
        type="text"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.color || ""}
        name="color"
        placeholder="Color"
        type="text"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.wheel || ""}
        name="wheel"
        placeholder="Wheel size"
        type="number"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.price || ""}
        name="price"
        placeholder="Price"
        type="number"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.id || ""}
        name="id"
        placeholder="ID"
        type="number"
        required
      />
      <Textarea
        onChange={props.handleChange}
        value={props.value.desc || ""}
        name="desc"
        placeholder="Description"
        required
      ></Textarea>
      <Button type="submit" name="save" value="Save" />
      <Button
        onClick={() => props.handleClear()}
        type="reset"
        name="clear"
        value="Clear"
      />
    </FormWrapper>
  );
};

export default Form;
