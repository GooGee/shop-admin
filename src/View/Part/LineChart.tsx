import {
    Chart,
    ChartDataset,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js"
import "chart.js/auto"
import { Line } from "react-chartjs-2"

Chart.register(Legend, LinearScale, LineElement, PointElement, Title, Tooltip)
Chart.defaults.elements.point.radius = 5
Chart.defaults.elements.point.hoverRadius = 11
Chart.defaults.interaction.intersect = false
Chart.defaults.interaction.mode = "index"

export interface ChartNode {
    id: number
    amount: number
    dtCreate: string
}

interface Property {
    itemzz: ChartNode[]
}

export default function LineChart(property: Property) {
    const itemzz = property.itemzz.slice()
    if (itemzz.length === 0) {
        itemzz.push({
            id: 0,
            amount: 0,
            dtCreate: new Date().toISOString(),
        })
    }
    if (itemzz.length === 1) {
        const dt = new Date(Date.parse(itemzz[0].dtCreate))
        dt.setDate(dt.getDate() - 1)
        itemzz.push({
            id: 1,
            amount: 0,
            dtCreate: dt.toISOString(),
        })
    }

    let recentzz = itemzz
    let oldzz: ChartNode[] = []
    let half = itemzz.length
    if (itemzz.length >= 14) {
        half = Math.floor(itemzz.length / 2)

        recentzz = itemzz.slice(0, half)
        oldzz = itemzz.slice(half, half + half)
    }
    recentzz.reverse()
    oldzz.reverse()

    function makeDatazz() {
        const datazz: ChartDataset<"line", number[]>[] = [
            {
                label: `last ${half} days`,
                data: recentzz.map((item) => item.amount),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ]
        if (recentzz.length === itemzz.length) {
            return datazz
        }

        datazz.push({
            label: "preceding period",
            data: oldzz.map((item) => item.amount),
        })
        return datazz
    }

    return (
        <Line
            datasetIdKey="id"
            data={{
                labels: recentzz.map((item) => item.dtCreate.slice(5, 10)),
                datasets: makeDatazz(),
            }}
        />
    )
}
