import { EntityEnum } from "@/TypeScriptEnum"
import { Box, Button, ButtonGroup, Card, CardContent, Grid, Stack } from "@mui/material"
import { red, green } from "@mui/material/colors"
import { useState } from "react"
import { Loading, useGetOne } from "react-admin"
import AppError from "./AppError"
import LineChart, { ChartNode } from "./Part/LineChart"

const Revenue = "Revenue"

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

    function getItemzz(tab: string) {
        let itemzz = getSource(tab)
        if (itemzz.length === 0) {
            return []
        }
        if (itemzz.length < 15) {
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

    function getSource(tab: string): ChartNode[] {
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

        let total = getSource(tab)[0]?.amount ?? 0
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
                    <div>{tab}</div>
                    <Stack
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                        marginTop={1}
                    >
                        <h3>{new Intl.NumberFormat().format(total)}</h3>
                        <Box>
                            +{new Intl.NumberFormat().format(itemzz[0]?.amount ?? 0)}
                        </Box>
                        <Box color={percentage < 0 ? red.A400 : green.A700}>
                            {percentage > 0 ? "+" : ""}
                            {percentage.toFixed(1)} %
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        )
    }

    return (
        <Stack>
            <Grid container direction="row" marginTop={2} spacing={8}>
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

            <LineChart itemzz={getItemzz(entity)}></LineChart>
        </Stack>
    )
}
