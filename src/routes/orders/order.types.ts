import { Static, Type } from '@sinclair/typebox';

export const Order = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  body: Type.String()
});

export const ParamsId = Type.Object({
  id: Type.Number()
});

export const Orders = Type.Array(Order);

export type OrderType = Static<typeof Order>;
export type OrdersType = Static<typeof Orders>;
export type ParamsIdType = Static<typeof ParamsId>;
