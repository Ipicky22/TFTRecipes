import React, {useState} from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import _ from 'lodash'
import './App.css';

const recipes = {
  "BFSword" : {
    1 : ["BFSword", "Deathblade"],
    2 : ["ChainVest", "GuardianAngel"],
    3 : ["GiantsBelt", "ZekesHerald"],
    4 : ["NeedlesslyLargeRod", "HextechGunblade"],
    5 : ["NegatronCloak", "Bloodthirster"],
    6 : ["RecurveBow", "GiantSlayer"],
    7 : ["SparringGloves", "InfinityEdge"],
    8 : ["Spatula", "BladeoftheRuinedKing"],
    9 : ["TearoftheGoddess", "SpearofShojin"]
  },
  "ChainVest" : {
    1 : ["BFSword", "GuardianAngel"],
    2 : ["ChainVest", "BrambleVest"],
    3 : ["GiantsBelt", "RedBuff"],
    4 : ["NeedlesslyLargeRod", "LocketoftheIronSolari"],
    5 : ["NegatronCloak", "SwordBreaker"],
    6 : ["RecurveBow", "TitansResolve"],
    7 : ["SparringGloves", "ShroudofStillness"],
    8 : ["Spatula", "RebelMedal"],
    9 : ["TearoftheGoddess", "FrozenHeart"]
  },
  "GiantsBelt" : {
    1 : ["BFSword", "ZekesHerald"],
    2 : ["ChainVest", "RedBuff"],
    3 : ["GiantsBelt", "WarmogsArmor"],
    4 : ["NeedlesslyLargeRod", "Morellonomicon"],
    5 : ["NegatronCloak", "Zephyr"],
    6 : ["RecurveBow", "ZzRotPortal"],
    7 : ["SparringGloves", "TrapClaw"],
    8 : ["Spatula", "ProtectorsChestguard"],
    9 : ["TearoftheGoddess", "Redemption"]
  },
  "NeedlesslyLargeRod" : {
    1 : ["BFSword", "HextechGunblade"],
    2 : ["ChainVest", "LocketoftheIronSolari"],
    3 : ["GiantsBelt", "Morellonomicon"],
    4 : ["NeedlesslyLargeRod", "RabadonsDeathcap"],
    5 : ["NegatronCloak", "IonicSpark"],
    6 : ["RecurveBow", "GuinsoosRageblade"],
    7 : ["SparringGloves", "JeweledGauntlet"],
    8 : ["Spatula", "BattlecastPlating"],
    9 : ["TearoftheGoddess", "LudensEcho"]
  },
  "NegatronCloak" : {
    1 : ["BFSword", "Bloodthirster"],
    2 : ["ChainVest", "SwordBreaker"],
    3 : ["GiantsBelt", "WarmogsArmor"],
    4 : ["NeedlesslyLargeRod", "IonicSpark"],
    5 : ["NegatronCloak", "DragonsClaw"],
    6 : ["RecurveBow", "RunaansHurricane"],
    7 : ["SparringGloves", "Quicksilver"],
    8 : ["Spatula", "CelestialOrb"],
    9 : ["TearoftheGoddess", "ChaliceofPower"]
  },
  "RecurveBow" : {
    1 : ["BFSword", "GiantSlayer"],
    2 : ["ChainVest", "TitansResolve"],
    3 : ["GiantsBelt", "ZzRotPortal"],
    4 : ["NeedlesslyLargeRod", "GuinsoosRageblade"],
    5 : ["NegatronCloak", "RunaansHurricane"],
    6 : ["RecurveBow", "RapidFirecannon"],
    7 : ["SparringGloves", "LastWhisper"],
    8 : ["Spatula", "InfiltratorsTalons"],
    9 : ["TearoftheGoddess", "StatikkShiv"]
  },
  "SparringGloves" : {
    1 : ["BFSword", "InfinityEdge"],
    2 : ["ChainVest", "ShroudofStillness"],
    3 : ["GiantsBelt", "TrapClaw"],
    4 : ["NeedlesslyLargeRod", "JeweledGauntlet"],
    5 : ["NegatronCloak", "Quicksilver"],
    6 : ["RecurveBow", "LastWhisper"],
    7 : ["SparringGloves", "ThiefsGloves"],
    8 : ["Spatula", "DarkStarsHeart"],
    9 : ["TearoftheGoddess", "HandofJustice"]
  },
  "Spatula" : {
    1 : ["BFSword", "BladeoftheRuinedKing"],
    2 : ["ChainVest", "ShroudofStillness"],
    3 : ["GiantsBelt", "ProtectorsChestguard"],
    4 : ["NeedlesslyLargeRod", "BattlecastPlating"],
    5 : ["NegatronCloak", "CelestialOrb"],
    6 : ["RecurveBow", "InfiltratorsTalons"],
    7 : ["SparringGloves", "DarkStarsHeart"],
    8 : ["Spatula", "ForceofNature"],
    9 : ["TearoftheGoddess", "StarGuardiansCharm"]
  },
  "TearoftheGoddess" : {
    1 : ["BFSword", "SpearofShojin"],
    2 : ["ChainVest", "FrozenHeart"],
    3 : ["GiantsBelt", "Redemption"],
    4 : ["NeedlesslyLargeRod", "LudensEcho"],
    5 : ["NegatronCloak", "ChaliceofPower"],
    6 : ["RecurveBow", "StatikkShiv"],
    7 : ["SparringGloves", "HandofJustice"],
    8 : ["Spatula", "StarGuardiansCharm"],
    9 : ["TearoftheGoddess", "BlueBuff"]
  }
  
}

function App() {

  const [selectItem, setSelectItem] = useState("BFSword");

  const displayRecipe = () => {
    for (let object in recipes) {
      if ( object === selectItem) {
        return _.toArray(recipes[object]).map((item, index) => {
          return (
          <div key={index} style={{ display:"flex", flexDirection:"row", margin: 4}}>
            {item.map((item2, index2) => {
              return (
                <div key={item2} style={{ display:"flex", flexDirection:"row"}}>
                  <img src={require(`../public/items/${item2}.png`)} alt={item2} height={30} width={30} />
                  {index2 === 0 ? <div style={{ display:"flex", justifyContent:"center", alignItems:"center", marginRight: 8, marginLeft: 8, color:"#FE882C"}}><AiOutlineArrowRight /></div> : null }
                </div>
              )
            })}
          </div>
          )
        })
      }
    }
  }

  return (
    <div className="App" style={{ display:"flex", flex:1, flexDirection:"column", backgroundColor:"#122847"}}>

      {selectItem != null ? (
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            {displayRecipe()}
          </div>
      ) : null }
      
      <div style={{ borderTop:"1px solid #FE882C", marginTop: 4, marginBottom: 4}}></div>
      <div style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap"}}>
        { Object.keys(recipes).map((item, index) => {
          return (
            <div key={item} onClick={() => setSelectItem(item)}>
              <img src={require(`../public/items/${item}.png`)} alt={item} height={30} width={30} style={{margin: 4}} />
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
