import Header from "./components/Header";
import Form from "./components/form";
import MainContent from "./components/main-content";
import { forms } from "./data";

const App = () => (
  <>
    <Header />
    <MainContent>
      <div>
        {forms.map((form) => (
          <Form {...form} key={form.name} />
        ))}
      </div>
    </MainContent>
  </>
);

export default App;
