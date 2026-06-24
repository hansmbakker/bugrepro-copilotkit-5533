import { CopilotKit, CopilotChat } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";

export default function App() {
  return (
    <CopilotKit runtimeUrl="/copilotkit"      >
      <CopilotChat agentId="backend_tool_rendering" />
    </CopilotKit>
  );
}