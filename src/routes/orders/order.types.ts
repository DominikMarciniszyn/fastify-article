import { Static, Type } from '@sinclair/typebox';

export const Order = Type.Object({
  id: Type.Number(),
  title: Type.String(),
  body: Type.String()
});

export const Orders = Type.Array(Order);

export type OrdersType = Static<typeof Orders>;
