import { EntityEnum } from "@/TypeScriptEnum"
import { Box, Button, ButtonGroup, Card, CardContent, Grid, Stack } from "@mui/material"
import { red, green } from "@mui/material/colors"
import { useState } from "react"
import { Loading, useGetOne } from "react-admin"
import AppError from "./AppError"
import LineChart from "./Part/LineChart"
import PieChart from "./Part/PieChart"
import { ChartNode, subtract } from "@/Service/makeChartData"
import BarChart from "./Part/BarChart"

const DayCount = 61

export const Revenue = "Revenue"

export default function Dashboard() {
    const [entity, setEntity] = useState<string>(EntityEnum.Order)

    const { data, isLoading, error } = useGetOne(EntityEnum.Chart, {
        id: 0,
        meta: { length: 61 },
    })

    const tabzz = [EntityEnum.Order, EntityEnum.User, Revenue]

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <AppError error={error} />
    }

    function count(day: number, tab: string) {
        const itemzz = getSource(tab, data)
        if (itemzz.length === 0) {
            return 0
        }
        if (day >= itemzz.length) {
            day = itemzz.length - 1
        }
        const amount = itemzz[0].amount - itemzz[day].amount
        if (tab === Revenue) {
            return Math.ceil(amount / 1e5)
        }
        return amount
    }

    function getItemzz(tab: string) {
        let itemzz = getSource(tab, data)
        if (itemzz.length === 0) {
            return []
        }
        if (itemzz.length < DayCount) {
            const dt = new Date(Date.parse(itemzz[itemzz.length - 1].dtCreate))
            itemzz = [
                ...itemzz,
                {
                    id: 0,
                    amount: 0,
                    dtCreate: dt.toISOString(),
                },
            ]
        }

        return subtract(itemzz, tab)
    }

    function getSource(tab: string, data: Record<string, ChartNode[]>): ChartNode[] {
        if (tab === EntityEnum.Order) {
            return data.orderzz
        }
        if (tab === EntityEnum.Product) {
            return data.productzz
        }
        if (tab === EntityEnum.User) {
            return data.userzz
        }
        return data.revenuezz
    }

    function makeCard(tab: string) {
        const itemzz = getItemzz(tab)

        let total = getSource(tab, data)[0]?.amount ?? 0
        if (tab === Revenue) {
            total = Math.ceil(total / 1e5)
        }

        let percentage = 0
        if (itemzz.length > 1) {
            const amount = itemzz[1].amount
            if (amount) {
                percentage = (100 * (itemzz[0].amount - amount)) / amount
            }
        }

        return (
            <Card>
                <CardContent sx={{ p: 2 }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{tab}</td>
                                <td>1 day</td>
                                <td>1 week</td>
                                <td>1 month</td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>{new Intl.NumberFormat().format(total)}</h3>
                                </td>
                                <td>
                                    +
                                    {new Intl.NumberFormat().format(
                                        itemzz[0]?.amount ?? 0,
                                    )}
                                </td>
                                <td>
                                    +{new Intl.NumberFormat().format(count(7, tab))}
                                </td>
                                <td>
                                    +{new Intl.NumberFormat().format(count(30, tab))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        )
    }

    return (
        <Stack>
            <Grid container direction="row" marginTop={2} spacing={6}>
                {tabzz.map((item) => (
                    <Grid item key={item} xs={4} style={{ paddingTop: 0 }}>
                        {makeCard(item)}
                    </Grid>
                ))}
            </Grid>

            <Grid marginTop={4}>
                <ButtonGroup variant="outlined">
                    {tabzz.map((item) => (
                        <Button
                            key={item}
                            onClick={() => setEntity(item)}
                            variant={item === entity ? "contained" : "outlined"}
                        >
                            {item}
                        </Button>
                    ))}
                </ButtonGroup>
            </Grid>

            <Grid container direction="row">
                <Grid item xs={9}>
                    <LineChart itemzz={getItemzz(entity)}></LineChart>
                </Grid>

                <Grid item xs={3}>
                    <BarChart
                        itemzz={subtract(getSource(entity, data.monthSum), entity)}
                        title={entity}
                    ></BarChart>
                    <PieChart map={data.orderCount}></PieChart>
                </Grid>
            </Grid>
        </Stack>
    )
}
