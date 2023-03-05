enum OrderStatus {
    PaymentUnpaid = "Unpaid",

    Placed = "Placed",
    Cancelled = "Cancelled",

    PaymentPayed = "Payed",

    Fulfilled = "Fulfilled",
    Received = "Received",
    Returned = "Returned",

    PaymentRefunded = "Refunded",
}

export default OrderStatus
