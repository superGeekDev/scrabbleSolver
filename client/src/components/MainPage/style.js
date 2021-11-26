import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	root: {
		padding: 0,
		height: "100%",
	},
	imgContainer: {
		display: "none",
		["@media (min-width:800px)"]: {
			display: "block"
		}
	},
	contentContainer: {
		padding: "10px 30px"
	}
}));
