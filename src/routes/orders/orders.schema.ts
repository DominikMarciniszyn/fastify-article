import { Orders, Order, ParamsId, CreateOrder, SimpleResponse, CreateOrderRequiredBody } from "./order.types";

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

export const createOrderSchema = {
  schema: {
    body: {
      type: 'object',
      required: CreateOrderRequiredBody,
      properties: CreateOrder
    },
    params: ParamsId,
    response: {
      200: SimpleResponse
    }
  }
}
