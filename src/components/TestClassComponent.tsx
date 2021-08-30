import { Component } from "react";

export default class TestClass extends Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { formId: Math.random().toString() };
  }

  submitForm = (e: any) => {
    e.preventDefault();
    console.log(e.target.testInput.value);
  };

  submit = () => {
    console.log("submit function called", this.state);
    const form = document.getElementById(this.state.formId) as HTMLFormElement;
    form.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  };

  render() {
    return (
      <>
        <h1>Test Form</h1>
        <form id={this.state.formId} onSubmit={this.submitForm}>
          <label>Some input here</label>
          <input type="text" name="testInput" />
          <button type="submit">HTML form submit</button>
        </form>
        <button onClick={this.submit}>Function submit</button>
      </>
    );
  }
}
