import { light } from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/system";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#f44336",
            light:"skyblue"
        },
        secondary:{
            main:"#15c630"
        },
        otherColor:{
            main:"#999"
        }
    }
})