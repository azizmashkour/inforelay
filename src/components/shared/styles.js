import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    marginTop: '4rem',
  },
  heroContentLog: {
    backgroundColor: theme.palette.background.paper,
    marginTop: '4rem',
  },
  typo: {
    color: '#3d3d3d',
    marginBottom: '3rem',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGridHome: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContentCenter: {
    width: '100%',
    textAlign: 'center'
  },
  chartClx: {
    maxHeight: '100%',
  },
  cardContentDescription: {
    maxHeight: '7rem',
    overflow: 'hidden'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  listItems: {
    paddingLeft: 0,
    listStyleType: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    flexGrow: 1,
    padding: '.5rem'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '15px'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    paddingLeft: '3rem'
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 20,
        padding: '20px',
      },
    },
  },
  helpCenterRoot: {
    width: '100%',
    marginBottom: 50,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  rounded: {
    color: '#fff',
    backgroundColor: 'rgb(226, 0, 26) !important',
    padding: '0',
    marginTop: '1rem',
    width: '40%!important',
    height: '2rem!important',
  },
  SearchFormGroup: {
    justifyContent: "center",
    alignItems: 'center',
  },
  socialShare: {
    display: "inline-block",
    width: '5%',
    textAlign: 'center',
    fontSize: '30px',
    borderRadius: '6px',
    marginRight: '.5rem',
    cursor: 'pointer',
    boxShadow: '-1px 0px 5px rgba(0, 0, 0, 0.1)',
    '& a': {
      fontSize: '1.5rem',
    },
  },
  editorBtn: {
    textDecoration: 'none',
    '& hover': {
      backgroundColor: 'none',
    },
    '& button': {
      borderRadius: '50px',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
  addInfo: {
    justifyContent: 'center',
    display: 'flex',
  },
  backBtn: {
    borderRadius: '50px',
    marginBottom: '2rem',
  },
  error: {
  	fontSize: '1.8rem',
  	color: '#bb0000',
  },
  labelize: {
    textTransform: 'capitalize !important',
  },
  // errorDanger: {
  //   border: '2px solid #bb0000',
  //   borderRadius: '20px'
  // },
}));
