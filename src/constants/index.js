
import {    arrowRight,
    cheveronRight,
    chevronLeft,
    copyrightSign,
    facebook,
    hamburger,
    instagram,
    support,
    shieldTick,
    star,
    truckFast,
    twitter, 
    InstagramColored,
    LinkedinColored,
    BehanceColored,
    GithubColored,
} from "../assets/icons";
    
import {skate1, skate2, skate3,   skate4, skate5, skate6, skate7, skate8 , skate9, skate10,  skate11, skate12, skate13, skate14, skate15, skate16, skate17, skate19  } from "../assets/images";

import { monosvg, momo, pinkmono, monowheels } from "../assets/images";

import { customer1, customer2 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home", path: "/" },
    { href: "#about-us", label: "About Us", path: "/about-us" },
    { href: "#products", label: "Products", path: "/products" },
    { href: "#contact-us", label: "Contact Us", path: "/" },
];

export const bannerImages = [
    {   imgURL: monosvg,
        name: 'Baker Brand Logo Red',
        price: '$120',
        rating: '4.5',
        },
      
        {
            imgURL: pinkmono,
          name: 'DGK Pink Monogram',
          price: '$150',
            rating: '4.5',
          },
      
          {
            imgURL: monowheels,
            name: 'DGK Pink Monogram ',
            price: '$50',
            rating: '4.5',
            },
];



export const statistics = [
    { value: '4.75', label: 'Rating' },
    { value: '5+', label: 'Colors' },
    { value: '25k+', label: 'Sold' },
];

export const products = [
    
        {
            imgURL: skate1,
            name: "DGK Symphony Green",
            price: 120.20,
            rating: 3.2,
        },
        {
            imgURL: skate2,
            name: "Baker Starlight Blue",
            price: 150.20,
            rating: 2.7,
        },
        {
            imgURL: skate3,
            name: "Baker Starlight LE Blue",
            price: 50.20,
            rating: 4.1,
        },
        {
            imgURL: skate4,
            name: "DGK Kiasma Pink",
            price: 200.20,
            rating: 1,
        },
        {
            imgURL: skate5,
            name: "DGK Holy Spirit Black",
            price: 210.20,
            rating: 3.5
        },
        {
            imgURL: skate6,
            name: "Element Grafitti white",
            price: 220.20,
            rating: 1.9
        },
        {
            imgURL: skate7,
            name: "DGK Modern Grafitti White",
            price: 230.20,
            rating: 4.4
        },
        {
            imgURL: skate8,
            name: "DGK Cartoon White",
            price: 50.20,
            rating: 2.3,
        },
        {
            imgURL: skate9,
            name: "Baker Holy Spirit Red",
            price: 120.20,
            rating: 4.8,
        },
        {
            imgURL: skate10,
            name: "DGK Bubblegum Green",
            price: 150.20,
            rating: 1,
        },
        {
            imgURL: skate11,
            name: "Baker Jason Green",
            price: 50.20,
            rating: 3.9,
        },
        {
            imgURL: skate12,
            name: "DGK Rocket Yellow",
            price: 200.20,
            rating: 2.1,
        },
        {
            imgURL: skate13,
            name: "DGK BubbleGum Green",
            price: 200.20,
            rating: 4.6,
        },
        {
            imgURL: skate14,
            name: "DGK Modern Grafitti Blue",
            price: 200.20,
            rating: 1.2,
        },
        {
            imgURL: skate15,
            name: "Element Anime Red",
            price: 200.20,
            rating: 3.0,
        },
        {
            imgURL: skate16,
            name: "Element Bruce Lee Blue",
            price: 200.20,
            rating: 1,
        },
        {
            imgURL: skate17,
            name: "DGK Candy White",
            price: 200.20,
            rating: 4.3,
        },
        {
            imgURL: skate19,
            name: "DGK M&M Yellow",
            price: 200.20,
            rating: 2.5,
        },
    
    


    


];

export const popularproducts = [
    {
        imgURL: skate4,
        name: "DGK BubbleGum",
        price: "200.20",
        rating: "4.5",
    },
    {
        imgURL: skate5,
        name: "DGK Holy Spirit",
        price: "210.20",
        rating: "3.5"
    },
    {
        imgURL: skate6,
        name: "WMD Free Spirit",
        price: "220.20",
        rating: "3.5"
    },
    {
        imgURL: skate7,
        name: "DGK Modern Grafitti",
        price: "230.20",
        rating: "4"
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },

    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },

];

export const filterOptions = [
    { label: "Brand", values: ["DGK", "Baker", "Element"] },
    { label: "Price", values: ["$0 - $25", "$25 - $50", "$50 - $100", "$100 - $200"] },
    { label: "Color", values: ["Red", "Blue", "Green", "Yellow", "Black", "White"] },
  

];





export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const socialMediaColored = [
    { src: InstagramColored, alt: "Instagram logo", link: "https://www.instagram.com/smitzlean/" },
    { src: LinkedinColored, alt: "Linkedin logo", link: "https://www.linkedin.com/in/smit-shewale/"  },
    { src: BehanceColored, alt: "Behance logo", link: "https://www.behance.net/smitzzzy2308"  },
    { src: GithubColored, alt: "Github logo", link: "https://github.com/smit2308"  },
];
