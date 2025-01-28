import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import createDOMPurify from "dompurify";
import { FaBell } from 'react-icons/fa';
import { RiSettingsLine } from "react-icons/ri";
import Skeleton  from 'react-loading-skeleton';

const purify = createDOMPurify(window)

const Middle = () => {
  const selected_Cuisine = useSelector(
    (state: RootState) => state.recepi.cuisine
  );
  const selected_Diet = useSelector(
    (state: RootState) => state.recepi.diet
  );
  interface Recepi {
    id: string;
    title: string;
    image: string;
    imagetype: string;
  }
  const api_values = {
    apiUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY,
  };
  const [query, setQuery] = useState<String>("");
  const [recipe, setRecipe] = useState<Recepi[]>([]);
  const [info,setInfo] = useState<HTMLElement | null>(null)
  const recipeLoader = async () => {
    try {
      let resp = await axios.get(
        api_values.apiUrl +
          "/complexSearch?cuisine=" +
          selected_Cuisine +
          "&query=" +
          query +
          "&apiKey=" +
          api_values.apiKey
      );
      setRecipe(resp.data.results);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    recipeLoader();
  }, [selected_Cuisine]);
  const findRecepi = async () => {
    let recepi_resp = await axios.get(
      api_values.apiUrl +
        "/complexSearch?cuisine="+
          selected_Cuisine +"&query=" +
        query + "&diet="+selected_Diet+
        "&apiKey=" +
        api_values.apiKey
    );
    setRecipe(recepi_resp.data.results);
  };
  const recepi_info = async(id:any)=>{
    let recepiInfo = await axios.get(api_values.apiUrl+'/'+id+'/information?apiKey='+api_values.apiKey)
    setInfo(recepiInfo.data.instructions)
  }
  return (
    <div className="mainSection">
      <section className="navArea">
        <div className="searchSection">
          <input
          className="searchBar"
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            name="recepiSearch"
            id="s1"
            placeholder="search recepies"
          />
          <button className="searchButton" onClick={findRecepi}>Search</button>
        </div>
        <div className="profile_area">
          <div><FaBell/></div>
          <div>
            <p>U</p>
          </div>
        </div>
      </section>
      <div className="today">
        Hello
      </div>
      <div className="recepiSection">
        {recipe.length === 0?(
          Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="recipeCard" sx={{ width: 345 }}>
              <CardActionArea>
                <Skeleton width={345} height={345} />
                <CardContent className="content">
                  <Skeleton width="60%" height={20} style={{ marginTop: 10 }} count={1}/>
                  <Skeleton width="80%" height={20} style={{ marginTop: 5 }} count={1}/>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ):        
        recipe.map((e, i) => (
          <Card className="recipeCard" key={e.id} sx={{ width: 345 }} onClick={()=>recepi_info(e.id)}>
            <CardActionArea>
              <CardMedia className="cardImg"
                component="img"
                height="140"
                image={e.image}
                alt={e.title}
              />
              <CardContent className="content">
                <Typography className="h3" gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        
      </div>
      <Box
          sx={{
            position:'absolute',
            top:'50px',
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: '70%',
              height: '70vh',
            },
          }}
        >
          <Paper elevation={3} dangerouslySetInnerHTML={{ __html: purify.sanitize(info || "") }} sx={{textAlign:'left'}}>

            
          </Paper>
        </Box>
    </div>
  );
};

export default Middle;
