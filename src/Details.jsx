import React from 'react';
// import LeftContent from './LeftContent';
// import Crop from './Crop';

function Details() {
  var leftPosition = {
    // minWidth: "500px",
    // maxWidth: "500px",
    // zIndex: "30"
  }

  var topStyle = {
    position: "relative",
    zIndex: "1",
    margin: '0 auto'
    // marginTop: "-325px",
    // marginLeft: "-200px"
  }

  const kombuchaDetails = [
    {
      name: "CLEAR MIND",
      description:"A fan favorite, this brilliant blend of rosemary, mint, sage and green tea is bright and invigorating.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: "My favorite kombucha flavor out there!",
      rating: "4.7"
    },
    {
      name: "LOVE",
      description:"Jasmine and lavender combine to create a refreshingly floral brew, popular during warmer months. Of course, Love is good any time of the year. 1% of the revenue of every bottle of our Love Kombucha sold will be donated directly to non-profits focused on benefitting our planet. From sustainable farming to educating the next generation about the world around them, we love the work being done and are proud to support it. Thanks for your help.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: "I would definitely purchase this product again.",
      rating: "4.8"
    },
    {
      name: "MINT LEMONADE",
      description:"A light and refreshing kombucha featuring spearmint, peppermint, lemons and green tea. A classic combination, deliciously applied. Find our special edition Timbers FC Mint Lemonade bottles and cans in stores in the Pacific Northwest. Go Timbers!",
      availibility: "Available in: 14oz bottles, 12oz cans & kegs",
      quote: "Mint Lemonade! Or Summer Mojito?",
      rating: "5"
    },
    {
      name: "GINGER TUMERIC",
      description:"A zesty beverage of ginger and turmeric presents the perfect botanical blend for any time of day.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: "Perfectly neutral",
      rating: "5"
    },
    {
      name: "STRAWBERRY BASIL",
      description:"Deliciously refreshing, this kombucha combines high-quality green tea with strawberries and two types of basil. The result is a light and fizzy kombucha with a perfectly balanced flavor from these sun-loving garden favorites. Find our special edition Thorns FC Strawberry Basil bottles and cans in stores in the Pacific Northwest. Go Thorns!",
      availibility: "Available in: 14oz bottles, 32oz bottles & kegs",
      quote: "Tastes great, and good for you!",
      rating: "4.6"
    },
    {
      name: "POWER FLOWER",
      description:"This bright and floral brew uses a dynamic blend of hibiscus, orange, lemon thyme, and green tea. Served ice cold or added to slushies and smoothies, it’s a refreshing treat for summer heat.",
      availibility: "Available in: 14oz bottles, 32oz bottles & kegs",
    },
    {
      name: "SUPERBERRY",
      description:"Approachable to first-time kombucha drinkers, this flavor balances the subtle sweetness of kombucha with the tart flavors of various berries.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: "My new favorite flavor!!",
      rating: "5"
    },
    {
      name: "UPLIFT",
      description:"Originally crafted for our Townshend’s Apothecary line of herbal teas, the recipe for this invigorating brew features the likes of nettle, mint, Yerba máte, and Sencha green tea.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: "This is my absolute favorite! I buy it all the time.",
      rating: "5"
    },
    {
      name: "HAPPINESS",
      description:"Formerly 'White Rose.' Healthy and refreshing white tea paired with pink rose petals give this drink a soft, floral finish. Another unique member of the Brew Dr. line.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: "Happiness in a bottle.",
      rating: "5"
    },
    {
      name: "SPICED APPLE",
      description:"As close as kombucha can get to apple pie. Cinnamon, clove and nutmeg combine with dried apple to create a uniquely cider-like experience.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: "Apple pie in a bottle",
      rating: "5"
    },
    {
      name: "CITRUS HOPS",
      description:"This unique recipe employs white tea leaves and two types of NW hops. The resulting brew is deliciously light, crisp and refreshing. It’s the happiest home for hops since beer. Cheers!",
      availibility: "Available in: 14oz bottles & kegs"
    },
    {
      name: "LEMON GINGER CAYENNE",
      description:"Potent organic ginger combines with the heat of cayenne pepper in this spicy yet refreshing brew, crafted with green tea and lemongrass.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: "Not for the faint of heart, but delicious!",
      rating: "4.8"
    }
  ];

  return (
    // <div style={topStyle}>
    //
    // <div style={leftPosition}>
    // {availableProduce.map((season, index) =>
    //   <LeftContent
    //   name={season.name}
    //   description={season.description.map(select => <p>{select}</p>)}
    //   key={index}/>
    // )}
    // </div>
    // </div>
  )
}

export default Details;
