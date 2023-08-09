
import { Box ,Tabs, TabList , Tab, TabPanels ,TabPanel} from "@chakra-ui/react";
import PageTitle from "../../components/PageTitle";
import MoviesList from "./MoviesList";
import TheatresList from "./TheatresList";


function Admin() {
  return (
<>
<PageTitle title="Admin" />
<Box>
<Tabs isLazy>
  <TabList>
    <Tab>Movies</Tab>
    <Tab>Theaters</Tab>
  </TabList>
  <TabPanels>
    {/* initially mounted */}
    <TabPanel>
      <MoviesList/>
    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
      <TheatresList/>
    </TabPanel>
  </TabPanels>
</Tabs>

</Box>
  </>
  )
}

export default Admin;
