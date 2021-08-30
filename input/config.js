const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: 5,
  },
  {
    value: "human",
    from: 6,
    to: editionSize,
  },
];

const races = {
  human: {
    name: "Human",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/LightBlue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 80,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/2-suit/Regular.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/2-suit/Orange.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "BackPack",
            path: `${dir}/2-suit/BackPack.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Blue",
            path: `${dir}/2-suit/Blue.png`,
            weight: 10,
          },
          {
            id: 4,
            name: "Gold",
            path: `${dir}/2-suit/Gold.png`,
            weight: 6,
          },
          {
            id: 5,
            name: "Donda",
            path: `${dir}/2-suit/Donda.png`,
            weight: 4,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shoulder",
        elements: [
          {
            id: 0,
            name: "LunaFlag",
            path: `${dir}/3-shoulder/LunaFlag.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "USA",
            path: `${dir}/3-shoulder/USA.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "LunaBlue",
            path: `${dir}/3-shoulder/LunaBlue.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "Skull",
            path: `${dir}/3-shoulder/Skull.png`,
            weight: 70,
          },
          {
            id: 4,
            name: "AlienPatch",
            path: `${dir}/3-shoulder/AlienPatch.png`,
            weight: 60,
          },
          {
            id: 5,
            name: "Russia",
            path: `${dir}/3-shoulder/Russia.png`,
            weight: 50,
          },
          {
            id: 6,
            name: "Fiat",
            path: `${dir}/3-shoulder/Fiat.png`,
            weight: 40,
          },
          {
            id: 7,
            name: "Mask",
            path: `${dir}/3-shoulder/Mask.png`,
            weight: 30,
          },
          {
            id: 8,
            name: "Commet",
            path: `${dir}/3-shoulder/Commet.png`,
            weight: 20,
          },
          {
            id: 9,
            name: "Shillers",
            path: `${dir}/3-shoulder/Shillers.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Smiley",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "LunaBluePin",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "CoinPin",
            path: `${dir}/4-pin/CoinPin.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "LunaFlagPin",
            path: `${dir}/4-pin/LunaFlagPin.png`,
            weight: 70,
          },
          {
            id: 4,
            name: "Hello",
            path: `${dir}/4-pin/Hello.png`,
            weight: 60,
          },
          {
            id: 5,
            name: "Earth",
            path: `${dir}/4-pin/Earth.png`,
            weight: 50,
          },
          {
            id: 6,
            name: "AlienPin",
            path: `${dir}/4-pin/AlienPin.png`,
            weight: 40,
          },
          {
            id: 7,
            name: "Diamond",
            path: `${dir}/4-pin/Diamond.png`,
            weight: 30,
          },
          {
            id: 8,
            name: "YOLO",
            path: `${dir}/4-pin/YOLO.png`,
            weight: 20,
          },
          {
            id: 9,
            name: "Decoration",
            path: `${dir}/4-pin/Decoration.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Human",
            path: `${dir}/5-skin/White.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Human",
            path: `${dir}/5-skin/Black.png`,
            weight: 50,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/6-facial-hair/NoFacialHair.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Mustache",
            path: `${dir}/6-facial-hair/Mustache.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "Goatee",
            path: `${dir}/6-facial-hair/Goatee.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/7-mask/NoMask.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Medical",
            path: `${dir}/7-mask/mask.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Blonde bun",
            path: `${dir}/8-hair/BlondeBun.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Pink",
            path: `${dir}/8-hair/Pink.png`,
            weight: 91,
          },
          {
            id: 2,
            name: "Brown long",
            path: `${dir}/8-hair/BrownLong.png`,
            weight: 82,
          },
          {
            id: 3,
            name: "Ginger",
            path: `${dir}/8-hair/Ginger.png`,
            weight: 73,
          },
          {
            id: 4,
            name: "Brown",
            path: `${dir}/8-hair/Brown.png`,
            weight: 64,
          },
          {
            id: 5,
            name: "Shaved",
            path: `${dir}/8-hair/Shaved.png`,
            weight: 55,
          },
          {
            id: 6,
            name: "Corn Row",
            path: `${dir}/8-hair/CornRow.png`,
            weight: 46,
          },
          {
            id: 7,
            name: "Green Mo",
            path: `${dir}/8-hair/GreenMo.png`,
            weight: 37,
          },
          {
            id: 8,
            name: "Punk",
            path: `${dir}/8-hair/Punk.png`,
            weight: 28,
          },
          {
            id: 9,
            name: "Fro",
            path: `${dir}/8-hair/Fro.png`,
            weight: 19,
          },
          {
            id: 10,
            name: "No hair",
            path: `${dir}/8-hair/NoHair.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Sunglasses",
            path: `${dir}/9-accessories/Sunglasses.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Vader",
            path: `${dir}/9-accessories/Vader.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Sunglasses 2",
            path: `${dir}/9-accessories/Sunglasses2.png`,
            weight: 15,
          },
          {
            id: 4,
            name: "Night Vision",
            path: `${dir}/9-accessories/NightVision.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "No Headwear",
            path: `${dir}/10-headwear/NoHeadwear.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Glass dome",
            path: `${dir}/10-headwear/GlassDome.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Helmet",
            path: `${dir}/10-headwear/Helmet.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Headset",
            path: `${dir}/10-headwear/Headset.png`,
            weight: 15,
          },
          {
            id: 4,
            name: "NFT Helmet",
            path: `${dir}/10-headwear/NFTHelmet.png`,
            weight: 6,
          },
          {
            id: 5,
            name: "Stealth",
            path: `${dir}/10-headwear/Stealth.png`,
            weight: 4,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Light blue",
            path: `${dir}/1-background/LightBlue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "Purple",
            path: `${dir}/1-background/Purple.png`,
            weight: 60,
          },
          {
            id: 3,
            name: "Teal",
            path: `${dir}/1-background/Teal.png`,
            weight: 40,
          },
          {
            id: 4,
            name: "Blue",
            path: `${dir}/1-background/Blue.png`,
            weight: 20,
          },
          {
            id: 5,
            name: "Electric",
            path: `${dir}/1-background/Electric.png`,
            weight: 10,
          },
          {
            id: 6,
            name: "Hypno",
            path: `${dir}/1-background/Hypno.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Suit",
        elements: [
          {
            id: 0,
            name: "Regular",
            path: `${dir}/2-suit/Regular.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Orange",
            path: `${dir}/2-suit/Orange.png`,
            weight: 20,
          },
          {
            id: 2,
            name: "BackPack",
            path: `${dir}/2-suit/BackPack.png`,
            weight: 15,
          },
          {
            id: 3,
            name: "Blue",
            path: `${dir}/2-suit/Blue.png`,
            weight: 10,
          },
          {
            id: 4,
            name: "Gold",
            path: `${dir}/2-suit/Gold.png`,
            weight: 6,
          },
          {
            id: 5,
            name: "Donda",
            path: `${dir}/2-suit/Donda.png`,
            weight: 4,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shoulder",
        elements: [
          {
            id: 0,
            name: "LunaFlag",
            path: `${dir}/3-shoulder/LunaFlag.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "USA",
            path: `${dir}/3-shoulder/USA.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "LunaBlue",
            path: `${dir}/3-shoulder/LunaBlue.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "Skull",
            path: `${dir}/3-shoulder/Skull.png`,
            weight: 70,
          },
          {
            id: 4,
            name: "AlienPatch",
            path: `${dir}/3-shoulder/AlienPatch.png`,
            weight: 60,
          },
          {
            id: 5,
            name: "Russia",
            path: `${dir}/3-shoulder/Russia.png`,
            weight: 50,
          },
          {
            id: 6,
            name: "Fiat",
            path: `${dir}/3-shoulder/Fiat.png`,
            weight: 40,
          },
          {
            id: 7,
            name: "Mask",
            path: `${dir}/3-shoulder/Mask.png`,
            weight: 30,
          },
          {
            id: 8,
            name: "Commet",
            path: `${dir}/3-shoulder/Commet.png`,
            weight: 20,
          },
          {
            id: 9,
            name: "Shillers",
            path: `${dir}/3-shoulder/Shillers.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "Smiley",
            path: `${dir}/4-pin/Smiley.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "LunaBluePin",
            path: `${dir}/4-pin/LunaBluePin.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "CoinPin",
            path: `${dir}/4-pin/CoinPin.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "LunaFlagPin",
            path: `${dir}/4-pin/LunaFlagPin.png`,
            weight: 70,
          },
          {
            id: 4,
            name: "Hello",
            path: `${dir}/4-pin/Hello.png`,
            weight: 60,
          },
          {
            id: 5,
            name: "Earth",
            path: `${dir}/4-pin/Earth.png`,
            weight: 50,
          },
          {
            id: 6,
            name: "AlienPin",
            path: `${dir}/4-pin/AlienPin.png`,
            weight: 40,
          },
          {
            id: 7,
            name: "Diamond",
            path: `${dir}/4-pin/Diamond.png`,
            weight: 30,
          },
          {
            id: 8,
            name: "YOLO",
            path: `${dir}/4-pin/YOLO.png`,
            weight: 20,
          },
          {
            id: 9,
            name: "Decoration",
            path: `${dir}/4-pin/Decoration.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 2,
            name: "Skull",
            path: `${dir}/5-skin/Skull.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Facial hair",
        elements: [
          {
            id: 0,
            name: "No facial hair",
            path: `${dir}/6-facial-hair/NoFacialHair.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mask",
        elements: [
          {
            id: 0,
            name: "No mask",
            path: `${dir}/7-mask/NoMask.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Medical",
            path: `${dir}/7-mask/mask.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 10,
            name: "No hair",
            path: `${dir}/8-hair/NoHair.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Sunglasses",
            path: `${dir}/9-accessories/Sunglasses.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Vader",
            path: `${dir}/9-accessories/Vader.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Sunglasses 2",
            path: `${dir}/9-accessories/Sunglasses2.png`,
            weight: 15,
          },
          {
            id: 4,
            name: "Night Vision",
            path: `${dir}/9-accessories/NightVision.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headwear",
        elements: [
          {
            id: 0,
            name: "No Headwear",
            path: `${dir}/10-headwear/NoHeadwear.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Glass dome",
            path: `${dir}/10-headwear/GlassDome.png`,
            weight: 25,
          },
          {
            id: 2,
            name: "Helmet",
            path: `${dir}/10-headwear/Helmet.png`,
            weight: 20,
          },
          {
            id: 3,
            name: "Headset",
            path: `${dir}/10-headwear/Headset.png`,
            weight: 15,
          },
          {
            id: 4,
            name: "NFT Helmet",
            path: `${dir}/10-headwear/NFTHelmet.png`,
            weight: 6,
          },
          {
            id: 5,
            name: "Stealth",
            path: `${dir}/10-headwear/Stealth.png`,
            weight: 4,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
