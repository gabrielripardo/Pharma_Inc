import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header(){
    const classes = {

        nav: {
            height: '65px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '0 30px',            
        },
        h1: {
            color: 'rgb(46 46 46)',
        }        
    }

    return(
        <nav style={classes.nav}>
            <h1 style={classes.h1}>Pharma Inc</h1> 
            <AccountCircleIcon fontSize="large"/>
        </nav>        
    )
}