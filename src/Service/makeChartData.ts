import { Revenue } from "@/View/Dashboard"

export interface ChartNode {
    id: number
    amount: number
    dtCreate: string
}

export default function makeChartData(cnzz: ChartNode[]) {
    const itemzz = cnzz.slice()
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
    return itemzz
}

export function subtract(cnzz: ChartNode[], tab: string) {
    if (cnzz.length < 2) {
        return cnzz
    }

    const itemzz = cnzz
    const changezz: ChartNode[] = new Array(itemzz.length - 1)
    for (let index = 1; index < itemzz.length; index++) {
        let change = itemzz[index - 1].amount - itemzz[index].amount
        if (tab === Revenue) {
            change = Math.ceil(change / 1e5)
        }
        changezz[index - 1] = { ...itemzz[index - 1], amount: change }
    }
    return changezz
}
