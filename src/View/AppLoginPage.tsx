import getErrorMessage from "@/Service/getErrorMessage"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { Button, Card, CardContent, CircularProgress, Grid, Stack } from "@mui/material"
import { useEffect } from "react"
import {
    Form,
    LoginFormProps,
    required,
    TextInput,
    useGetIdentity,
    useLogin,
    useNotify,
    useRedirect,
    useSafeSetState,
    useTranslate,
} from "react-admin"

export default function AppLoginPage(props: LoginFormProps) {
    const { data, isLoading, error } = useGetIdentity()
    const redirect = useRedirect()
    const [loading, setLoading] = useSafeSetState(false)
    const login = useLogin()
    const translate = useTranslate()
    const notify = useNotify()

    useEffect(() => {
        if (isLoading) {
            return
        }

        if (data) {
            redirect("/dashboard")
        }
    }, [isLoading])

    return (
        <Grid
            alignItems="center"
            container
            justifyContent="center"
            height="100vh"
            sx={{ backgroundImage: "linear-gradient(#acf, #28d, #43a)" }}
        >
            <Card>
                <CardContent>
                    <Grid textAlign="center">
                        <AccountCircleIcon fontSize="large" />
                    </Grid>

                    <Form
                        onSubmit={function (values) {
                            setLoading(true)
                            login(values, props.redirectTo)
                                .catch((error) => notify(getErrorMessage(error)))
                                .finally(() => setLoading(false))
                        }}
                        mode="onChange"
                        noValidate
                    >
                        <Stack>
                            <TextInput
                                autoFocus
                                defaultValue="test"
                                source="username"
                                label={translate("ra.auth.username")}
                                validate={required()}
                                fullWidth
                            />

                            <TextInput
                                defaultValue="111222333"
                                source="password"
                                label={translate("ra.auth.password")}
                                type="password"
                                validate={required()}
                                fullWidth
                            />

                            <Button
                                variant="outlined"
                                type="submit"
                                color="primary"
                                disabled={loading}
                                fullWidth
                            >
                                {loading ? (
                                    <CircularProgress size={24} thickness={6} />
                                ) : (
                                    translate("ra.auth.sign_in")
                                )}
                            </Button>
                        </Stack>
                    </Form>
                </CardContent>
            </Card>
        </Grid>
    )
}
