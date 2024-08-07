import type { Preview } from "@storybook/react";
import React from "react";
import theme from "../src/styles/theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import "../src/styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

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
          <Story />
        </ChakraProvider>
      </Router>
    ),
  ],
};

export default preview;
