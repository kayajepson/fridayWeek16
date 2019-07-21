import { v4 } from 'uuid';

//images
import ClearMindSmSq from './assets/BrewDr-Web-Tiles-CM.png';
import LoveSmSq from './assets/BrewDr-Web-Tiles-LUV.png';
import MintLemonadeSmSq from './assets/BrewDr-Web-Tiles-ML.png';
import GingerTumericSmSq from './assets/BrewDr-Web-Tiles-GT.png';
import StrawberryBasilSmSq from './assets/BrewDr-Web-Tiles-STB.png';
import PowerFlowerSmSq from './assets/BrewDr-Web-Tiles-PF2.png';
import SuperBerrySmSq from './assets/BrewDr-Web-Tiles-SB.png';
import UpLiftSmSq from './assets/BrewDr-Web-Tiles-UL.png';
import HappinessSmSq from './assets/BrewDr-Web-Tiles-HAP.png';
import SpicedAppleSmSq from './assets/BrewDr-Web-Tiles-SA.png';
import CitrusHopsSmSq from './assets/BrewDr-Web-Tiles-CH.png';
import LemonGingerCayenneSmSq from './assets/BrewDr-Web-Tiles-LGC.png';

import CMDesktop from './assets/CM-Desktop.png'
import GTDesktop from './assets/GT-Desktop-1024x466.png'
import CHDesktop from './assets/headers-citrus-hops_ll-1024x485.png'
import HAPDesktop from './assets/headers-happiness_ll-1024x392.png'
import LCGDesktop from './assets/headers-lemon-ginger-cayenne_ll-1024x529.png'
import MLDesktop from './assets/headers-mint-lemon_ll.png'
import SADesktop from './assets/headers-spiced-apple_ll-1024x466.png'
import SBDesktop from './assets/headers-superberry_lll.png'
import UPDesktop from './assets/headers-uplift_ll-1024x458.png'
import LVDesktop from './assets/LV-Desktop.png'
import STBDesktop from './assets/SB-Desktop-1024x380.png'
import PFDesktop from './assets/BrewDr_FlavorPageBanners_R3-1-1024x410.png'

import PFBkrnd from './assets/BrewDr-Botanical-BG-PF-2019-04.png'
import CHBkrnd from './assets/headers-bg-citrus-hops.jpg'
import GTBkrnd from './assets/headers-bg-ginger-tumeric.jpg'
import HAPBkrnd from './assets/headers-bg-happiness.jpg'
import LCGBkrnd from './assets/headers-bg-lemon-ginger-cayenne.jpg'
import LVBkrnd from './assets/headers-bg-love.jpg'
import MLBkrnd from './assets/headers-bg-mint-lemon.jpg'
import SABkrnd from './assets/headers-bg-spiced-apple.jpg'
import STBBkrnd from './assets/headers-bg-strawberry-basil.jpg'
import SBBkrnd from './assets/headers-bg-superberry.jpg'
import UPBkrnd from './assets/headers-bg-uplift.jpg'
import CMBkrnd from './assets/headers-bg-clear-mind.jpg'




  export const kombuchaDetails = [
    {
      name: "CLEAR MIND",
      description: "A fan favorite, this brilliant blend of rosemary, mint, sage and green tea is bright and invigorating.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: ["My favorite kombucha flavor out there!",
      "so good, yum!"],
      rating: "4.7",
      color: "#86b7bc",
      sq_img: ClearMindSmSq,
      desktop_img: CMDesktop,
      background_img: CMBkrnd,
      id: v4()
    },
    {
      name: "LOVE",
      description: "Jasmine and lavender combine to create a refreshingly floral brew, popular during warmer months. Of course, Love is good any time of the year. 1% of the revenue of every bottle of our Love Kombucha sold will be donated directly to non-profits focused on benefitting our planet. From sustainable farming to educating the next generation about the world around them, we love the work being done and are proud to support it. Thanks for your help.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: ["I would definitely purchase this product again."],
      rating: "4.8",
      color: "#cdabcf",
      sq_img: LoveSmSq,
      desktop_img: LVDesktop,
      background_img: LVBkrnd,
      id: v4()
    },
    {
      name: "MINT LEMONADE",
      description: "A light and refreshing kombucha featuring spearmint, peppermint, lemons and green tea. A classic combination, deliciously applied. Find our special edition Timbers FC Mint Lemonade bottles and cans in stores in the Pacific Northwest. Go Timbers!",
      availibility: "Available in: 14oz bottles, 12oz cans & kegs",
      quote: ["Mint Lemonade! Or Summer Mojito?"],
      rating: "5",
      color: "#6ba43a",
      sq_img: MintLemonadeSmSq,
      desktop_img: MLDesktop,
      background_img: MLBkrnd,
      id: v4()
    },
    {
      name: "GINGER TUMERIC",
      description: "A zesty beverage of ginger and turmeric presents the perfect botanical blend for any time of day.",
      availibility: "Available in: 14oz bottles, 32oz bottles, 12oz cans & kegs",
      quote: ["Perfectly neutral"],
      rating: "5",
      color: "#f7be00",
      sq_img: GingerTumericSmSq,
      desktop_img: GTDesktop,
      background_img: GTBkrnd,
      id: v4()
    },
    {
      name: "STRAWBERRY BASIL",
      description: "Deliciously refreshing, this kombucha combines high-quality green tea with strawberries and two types of basil. The result is a light and fizzy kombucha with a perfectly balanced flavor from these sun-loving garden favorites. Find our special edition Thorns FC Strawberry Basil bottles and cans in stores in the Pacific Northwest. Go Thorns!",
      availibility: "Available in: 14oz bottles, 32oz bottles & kegs",
      quote: ["Tastes great, and good for you!"],
      rating: "4.6",
      color: "#8fd5ac",
      sq_img: StrawberryBasilSmSq,
      desktop_img: STBDesktop,
      background_img: STBBkrnd,
      id: v4()
    },
    {
      name: "POWER FLOWER",
      description: "This bright and floral brew uses a dynamic blend of hibiscus, orange, lemon thyme, and green tea. Served ice cold or added to slushies and smoothies, it’s a refreshing treat for summer heat.",
      availibility: "Available in: 14oz bottles, 32oz bottles & kegs",
      quote: ["Delish!"],
      color: "#ff6f5e",
      sq_img: PowerFlowerSmSq,
      desktop_img: PFDesktop,
      background_img: PFBkrnd,
      id: v4()
    },
    {
      name: "SUPERBERRY",
      description: "Approachable to first-time kombucha drinkers, this flavor balances the subtle sweetness of kombucha with the tart flavors of various berries.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["My new favorite flavor!!"],
      rating: "5",
      color: "#83276a",
      sq_img: SuperBerrySmSq,
      desktop_img: SBDesktop,
      background_img: SBBkrnd,
      id: v4()
    },
    {
      name: "UPLIFT",
      description: "Originally crafted for our Townshend’s Apothecary line of herbal teas, the recipe for this invigorating brew features the likes of nettle, mint, Yerba máte, and Sencha green tea.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["This is my absolute favorite! I buy it all the time."],
      rating: "5",
      color: "#b4bd02",
      sq_img: UpLiftSmSq,
      desktop_img: UPDesktop,
      background_img: UPBkrnd,
      id: v4()
    },
    {
      name: "HAPPINESS",
      description: "Formerly 'White Rose.' Healthy and refreshing white tea paired with pink rose petals give this drink a soft, floral finish. Another unique member of the Brew Dr. line.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["Happiness in a bottle."],
      rating: "5",
      color: "#c10230",
      sq_img: HappinessSmSq,
      desktop_img: HAPDesktop,
      background_img: HAPBkrnd,
      id: v4()
    },
    {
      name: "SPICED APPLE",
      description: "As close as kombucha can get to apple pie. Cinnamon, clove and nutmeg combine with dried apple to create a uniquely cider-like experience.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["Apple pie in a bottle"],
      rating: "5",
      color: "#a22b2f",
      sq_img: SpicedAppleSmSq,
      desktop_img: SADesktop,
      background_img: SABkrnd,
      id: v4()
    },
    {
      name: "CITRUS HOPS",
      description: "This unique recipe employs white tea leaves and two types of NW hops. The resulting brew is deliciously light, crisp and refreshing. It’s the happiest home for hops since beer. Cheers!",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["Tastes great!"],
      rating: "5",
      color: "#bac22e",
      sq_img: CitrusHopsSmSq,
      desktop_img: CHDesktop,
      background_img: CHBkrnd,
      id: v4()
    },
    {
      name: "LEMON GINGER CAYENNE",
      description: "Potent organic ginger combines with the heat of cayenne pepper in this spicy yet refreshing brew, crafted with green tea and lemongrass.",
      availibility: "Available in: 14oz bottles & kegs",
      quote: ["Not for the faint of heart, but delicious!"],
      rating: "4.8",
      color: "#db6015",
      sq_img: LemonGingerCayenneSmSq,
      desktop_img: LCGDesktop,
      background_img: LCGBkrnd,
      id: v4()
    }
  ];
