import Input from "./input";
import TimeRange from "./time-range";
import "../styles/form.css";

const Form = (props) => (
  <section>
    <h2>{props.name}</h2>
    <form>
      {props.inputs.map((input) => {
        const inputId = [...props.name.split(" "), ...input.label.split(" ")]
          .join("-")
          .toLowerCase();
        return <Input {...input} key={input.label} id={inputId} />;
      })}
      {props.timeRange &&
        ["Start", "End"].map((boundary) => (
          <TimeRange key={boundary} section={props.name} boundary={boundary} />
        ))}
    </form>
  </section>
);

export default Form;
