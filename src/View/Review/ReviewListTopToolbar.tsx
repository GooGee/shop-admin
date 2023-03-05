import { TopToolbar, FilterForm, SelectInput } from "react-admin"

const starzz = []

for (let index = 1; index <= 5; index++) {
    starzz.push({ id: index, name: index })
}

const Filterzz = [
    <SelectInput
        alwaysOn
        choices={starzz}
        emptyText="-- all --"
        label="rating"
        source="rating"
        sx={{ width: 222 }}
    />,
]

export default function ReviewListTopToolbar() {
    return (
        <TopToolbar sx={{ alignItems: "center", width: "100%" }}>
            <FilterForm filters={Filterzz} />
        </TopToolbar>
    )
}
