import { AnyObject, FormJson } from "types";

// first attempt to combine ilos and plans functions

export const generateDrawerItemFields = (
  form: FormJson,
  items: AnyObject[],
  entityType: string
) => {
  const fields = form.fields[0];
  return {
    ...form,
    fields: [
      {
        ...form.fields[0],
        props: {
          ...form.fields[0].props,
          choices: [
            ...updatedItemChoiceList(
              fields.props?.choices,
              availableItems(items, entityType),
              entityType
            ),
          ],
        },
      },
    ],
  };
};

export const generateAddEntityDrawerItemFields = (
  form: FormJson,
  items: AnyObject[],
  entityType: string
) => {
  form.fields[3] = {
    ...form.fields[3],
    props: {
      ...form.fields[3].props,
      choices: [...availableItems(items, entityType)],
    },
  };
  return form;
};

const availableItems = (items: AnyObject[], entityType: string) => {
  const ilosFieldName = "plan_ilosUtilizationByPlan";
  const updatedItemChoices: AnyObject[] = [];
  items.forEach((item) => {
    updatedItemChoices.push({
      ...item,
      label: item.name,
      checked: false,
      ...(entityType === "ilos" && {
        children: [
          {
            id: `${ilosFieldName}_${item.id}`,
            type: "number",
            validation: {
              type: "number",
              nested: true,
              parentFieldName: `${ilosFieldName}`,
              parentOptionId: item.id,
            },
            props: {
              decimalPlacesToRoundTo: 0,
            },
          },
        ],
      }),
    });
  });
  return updatedItemChoices;
};

const updatedItemChoiceList = (
  choices: AnyObject[],
  itemChoices: AnyObject[],
  entityType: string
) => {
  const updatedChoiceList: AnyObject[] = [];
  if (entityType === "plan") {
    choices.map((choice: AnyObject) => {
      updatedChoiceList.push(
        choice.children
          ? {
              ...choice,
              children: [
                choice.children[0],
                {
                  ...choice.children[1],
                  props: {
                    ...choice.children[1].props,
                    choices: [...itemChoices],
                  },
                },
              ],
            }
          : { ...choice }
      );
    });
  } else {
    choices.map((choice: AnyObject) => {
      updatedChoiceList.push(
        choice.children
          ? {
              ...choice,
              children: [
                {
                  ...choice.children[0],
                  props: {
                    ...choice.children[0].props,
                    choices: [...itemChoices],
                  },
                },
              ],
            }
          : { ...choice }
      );
    });
  }

  return updatedChoiceList;
};
