import { Orders } from "./order.types";

export const getOrdersSchema = {
  schema: {
    response: {
      200: Orders
    },
  },
};

