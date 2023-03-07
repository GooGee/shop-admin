enum OrderStatus {
    PaymentUnpaid = "Unpaid",

    Placed = "Placed",
    Cancelled = "Cancelled",

    PaymentPaid = "Paid",

    Fulfilled = "Fulfilled",
    Received = "Received",
    Returned = "Returned",

    PaymentRefunded = "Refunded",
}

export default OrderStatus
