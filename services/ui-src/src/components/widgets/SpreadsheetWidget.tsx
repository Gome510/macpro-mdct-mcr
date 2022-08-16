import React from "react";
// components
import { Box, Flex, Image, Text } from "@chakra-ui/react";
// utils
import { SpreadsheetWidgetProps } from "types";
// assets
import greenSpreadsheetIcon from "../../assets/icons/icon_spreadsheet_green.png";

export const SpreadsheetWidget = ({ content, ...props }: Props) => {
  return (
    <Box {...props}>
      <Flex sx={sx.container}>
        <Flex sx={sx.iconContainer}>
          <Image
            src={greenSpreadsheetIcon}
            alt={"Excel Workbook Icon"}
            sx={sx.icon}
          />
        </Flex>
        <Box>
          <Text sx={sx.title}>{content.title}</Text>
          <Box>
            {content.descriptionList.map((description: any, index: any) => (
              <Text key={index} sx={sx.description}>
                {description}
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>
      {content.additionalInfo && (
        <Text sx={sx.additionalInfo}>{content.additionalInfo}</Text>
      )}
    </Box>
  );
};

interface Props {
  content: SpreadsheetWidgetProps;
  [key: string]: any;
}

const sx = {
  container: {
    paddingLeft: "1rem",
    borderLeft: "4px solid",
    borderColor: "palette.spreadsheet",
  },
  iconContainer: {
    maxWidth: "3rem",
    maxHeight: "3rem",
    marginRight: "1rem",
  },
  icon: {
    maxWidth: "2.5rem",
    maxHeight: "2.5rem",
    margin: "auto",
  },
  title: {
    color: "palette.spreadsheet_dark",
  },
  description: {
    fontWeight: "bold",
    color: "palette.spreadsheet_dark",
  },
  additionalInfo: {
    marginTop: "1rem",
    fontSize: "14",
  },
};
