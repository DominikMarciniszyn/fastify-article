import { OrderType } from './order.types';

const orders = [
  { id: 1, title: 'Order #1', body: 'This is order #1' },
  { id: 2, title: 'Order #2', body: 'This is order #2' },
  { id: 3, title: 'Order #3', body: 'This is order #3' },
];

export const getOrdersHandler = (req, reply): void => {
  reply.send(orders);
};

export const getOrderHandler = (req, reply): void => {
  const { id } = req.params;
  let order: OrderType | null = null;

  for (const item of orders) {
    if (item.id === +id) {
      order = item;
    }
  }

  if (!order) {
    return reply.status(404).send({
      errorMessage: 'Order not found'
    });
  }

  return reply.send(order as OrderType);
}
