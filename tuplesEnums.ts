const color: [number, number, number] = [255, 0, 555];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = "200"
// goodRes.push(123);
// goodRes.pop()
// goodRes.pop()

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

enum OrderStatus {
  PENDING = 10,
  SHIPPED = 34,
  DELIVERED = 324,
  RETURNED = 98,
}

const orderStatus = OrderStatus.DELIVERED;

const isDelivered = (status: OrderStatus) => {
  return status === OrderStatus.DELIVERED;
};

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOW = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.LEFT
