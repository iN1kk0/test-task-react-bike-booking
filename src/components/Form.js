import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  padding: 5px 16px;
  background: #e8e8e8;
  border-radius: 5px;
  border: none;
  margin: 5px 10px;
  flex: 1 1 auto;
`;

const Textarea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px;
  background: #e8e8e8;
  border-radius: 5px;
  margin: 5px 10px;
  border: none;
  flex: 0 1 100%;
`;

const Button = styled.button`
  display: flex;
  padding: 4px 22px;
  background: #696969;
  border-radius: 5px;
  margin: 5px 10px;
  flex: 0 1 auto;
  color: white;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const Form = (props) => {
  return (
    <FormWrapper onSubmit={props.handleSubmit}>
      <Input
        onChange={props.handleChange}
        value={props.value.name || ""}
        name="name"
        placeholder="Name"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.type || ""}
        name="type"
        placeholder="Type"
        required
      />
      <Input
        onChange={props.handleChange}
        value={props.value.color || ""}
        name="color"
        placeholder="Color"
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
      <Button type="submit" name="save">
        Save
      </Button>
      <Button name="clear">Clear</Button>
    </FormWrapper>
  );
};

export default Form;
