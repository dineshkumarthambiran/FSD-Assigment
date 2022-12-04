
import './App.css';
import Navbar from './Navbar';
import Feed from './Navbar';
import Rightsidebar from './Navbar';
import Sidebar from './Sidebar';
import { Box, ThemeProvider } from "@mui/material";
import Add from './Add';
import Post from './Post';



function App() {
  return (
    <ThemeProvider >
      <Box >
        <Navbar />

        <Sidebar />
          <Feed />
          <Rightsidebar />
        <Add />
        <Post />
      </Box>
    </ThemeProvider>
  );
}

export default App;
