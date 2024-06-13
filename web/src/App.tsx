import RoutesApp from "./routes";
import { GlobalStyle } from "./styles/global";
import { BaseLayout } from "./templates/Base";

function App() {
  return (
    <BaseLayout>
      <RoutesApp />
      <GlobalStyle />
    </BaseLayout>
  );
}

export default App;
