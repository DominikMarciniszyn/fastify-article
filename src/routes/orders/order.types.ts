import { Static, Type } from '@sinclair/typebox';

export const Order = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  body: Type.String()
});

export const CreateOrder = Type.Object({
  title: Type.String(),
  body: Type.String()
});

export const ParamsId = Type.Object({
  id: Type.Number()
});

export const SimpleResponse = Type.String();
export const Orders = Type.Array(Order);
export const CreateOrderRequiredBody = Type.Array(CreateOrder);

export type SimpleResponseType = Static<typeof SimpleResponse>;
export type CreateOrderType = Static<typeof CreateOrder>;
export type OrderType = Static<typeof Order>;
export type OrdersType = Static<typeof Orders>;
export type ParamsIdType = Static<typeof ParamsId>;
