import type { Preview } from "@storybook/react";
import React from "react";
import theme from "../src/styles/theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import {Form, ReportProvider} from "../src/components"
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Router>
        <ChakraProvider theme={theme}>
          <ReportProvider>
            <Form
              id="id"
              formJson={{id: "id1", fields: []}}
              onSubmit={() => {}}
              validateOnRender={false}
              dontReset={false}
            >
              <Story />
            </Form>
          </ReportProvider>
        </ChakraProvider>
      </Router>
    ),
  ],
};

export default preview;
