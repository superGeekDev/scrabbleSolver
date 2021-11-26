import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
	wordItem: {
		cursor: "pointer",
		marginTop: "10px",
		background: "#f2d99b",
		padding: 0
	},
	wordBox: {
		display: "flex",
		flexDirection: "raw",
		justifyContent: "space-between"
	}
}));