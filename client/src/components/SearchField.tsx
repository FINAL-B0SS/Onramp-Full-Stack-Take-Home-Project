import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
	callback: (text: string) => void
}

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100vh',
		backgroundColor: '#f7f8f9',
	},
	textField: {
		borderRadius: 10,
		backgroundColor: '#FFFFFF',
		height: theme.spacing(7),
		[`& fieldset`]: {
			borderRadius: 10,
			border: '2px solid black',
		},
	},
	buttonProgress: {
		top: '50%',
		left: '50%',
		position: 'absolute',
		marginLeft: -12,
		marginTop: -12,
	},
	searchButton: {
		fontSize: '1rem',
		margin: '0 auto',
		justify: 'right',
		color: '#FFFFFF',
		marginLeft: '1rem',
		border: '2px solid black',
		backgroundColor: '#6441A5',
		width: theme.spacing(10),
		height: theme.spacing(7),
		padding: theme.spacing(1, 3),
		borderRadius: theme.spacing(1),
	},
	box: {
		width: theme.spacing(85),
		marginBottom: theme.spacing(1),
		display: 'flex',
		alignItems: 'center',
	},
}))

const SearchField: React.FC<Props> = ({ callback }) => {
	const [searchText, setSearchText] = useState<string>('')
	const classes = useStyles()

	return (
		<Grid container direction='row' justify='center'>
			<Box className={classes.box}>
				<TextField
					className={classes.textField}
					fullWidth
					variant='outlined'
					placeholder='Paste XML link to RSS feed here...'
					onChange={(e) => {
						setSearchText(e.target.value)
					}}
					onSubmit={(e) => callback(searchText)}
				/>
				<Button
					className={classes.searchButton}
					onClick={() => callback(searchText)}
				>
					Add
				</Button>
			</Box>
		</Grid>
	)
}

export default SearchField
