import { Orders, Order, ParamsId } from "./order.types";

export const getOrdersSchema = {
  schema: {
    response: {
      200: Orders
    },
  },
};

export const getOrderSchema = {
  schema: {
    params: ParamsId,
    response: {
      200: {
        type: 'object',
        properties: Order
      },
    },
  },
};
