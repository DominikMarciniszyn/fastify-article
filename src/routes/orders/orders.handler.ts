export const getOrdersHandler = (req, reply) => {
  reply.send([
    { id: 1, title: 'Order #1', body: 'This is order #1' },
    { id: 2, title: 'Order #2', body: 'This is order #2' },
    { id: 3, title: 'Order #3', body: 'This is order #3' },
  ]);
};
