import { Pie } from "react-chartjs-2"

interface Property {
    map: Record<string, number>
}

export default function PieChart(property: Property) {
    // const amountzz = Object.values(property.map)
    // const sum = amountzz.reduce((a, b) => a + b, 0)

    const data = {
        labels: Object.keys(property.map),
        datasets: [
            {
                label: "amount",
                data: Object.values(property.map),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(75, 192, 77, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(75, 192, 77, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    }

    return <Pie data={data} />
}
