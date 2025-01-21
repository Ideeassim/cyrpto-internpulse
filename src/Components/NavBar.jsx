import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Toolbar, Box, AppBar, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { DataGrid } from '@mui/x-data-grid';



const { palette } = createTheme();
const theme = createTheme({
  palette: {
    myAwesomeColor: palette.augmentColor({
      color: {
        main: "#262E38",
        contrastText:'#7C8798'
      }
   }),
   myGreenColor: palette.augmentColor({
      color: {
        main: '#8EB486',
        contrastText:'#FFFFFF'
      }
   }),
   brownColor1: palette.augmentColor({
    color: {
      main: '#685752'
    }
  }),
  brownColor2: palette.augmentColor({
    color:{
      main:'#FFFFFF',
      contrastText:'#FC7614'
    }
  })
},
typography: {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
},
});




const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const SearchAppBar = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{bgcolor: 'brownColor1.main'}} >
                <Toolbar sx={{justifyContent: 'space-between'}}>
                  <Link to={"/"}>
                    <Box sx={{display:'flex', gap: '7px'}}>
                    <img src={logo} alt="" style={{'height': '30px', 'width':'30px', 'borderRadius':'70%'}} />
                    <Typography variant='h5' sx={{color: 'myGreenColor.main', textShadow:' 2px 2px black'}}>CoinTracker </Typography>
                    </Box>
                  </Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    </div>
  )
}

export default SearchAppBar