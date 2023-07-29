import { Bar } from "react-chartjs-2"
import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js"
import makeChartData, { ChartNode } from "@/Service/makeChartData"

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface Property {
    itemzz: ChartNode[]
    title: string
}

export default function BarChart(property: Property) {
    const itemzz = makeChartData(property.itemzz)
    itemzz.reverse()

    const data = {
        labels: itemzz.map((item) => item.dtCreate.slice(0, 7)),
        datasets: [
            {
                label: property.title,
                data: itemzz.map((item) => item.amount),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    }

    return <Bar data={data} />
}
