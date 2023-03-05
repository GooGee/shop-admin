import { purple } from "@mui/material/colors"
import { defaultTheme } from "react-admin"

export default function makeTheme(): typeof defaultTheme {
    const defaultProps = {
        variant: "outlined" as any,
        margin: "dense" as const,
        size: "small" as const,
    }
    const styleOverrides = {
        root: {
            width: 333,
        },
    }
    const theme = {
        ...defaultTheme,
        components: {
            ...defaultTheme.components,
            MuiSwitch: {
                styleOverrides: {
                    root: {
                        "& .MuiSwitch-colorSecondary.Mui-checked": {
                            color: purple[700],
                        },
                        "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
                            backgroundColor: purple[700],
                        },
                    },
                },
            },
            MuiTextField: {
                defaultProps,
                styleOverrides,
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        padding: "6px",
                        "& .RaImageField-image": {
                            maxWidth: 55,
                            maxHeight: 55,
                        },
                    },
                },
            },
            RaSelectInput: {
                defaultProps,
                styleOverrides,
            },
        },
    }
    return theme
}
