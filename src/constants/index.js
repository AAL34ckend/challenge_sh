import { lists, iconCard, iconChart, iconCoin, iconLamp, profile, profile2, instagram, facebook, twitter, linkedin } from "../utils"

export const navLists = ['Home', 'About', 'Payment', 'Services', 'Contact Us']
export const serviceLists = [
    {
        id: 1,
        icon: iconCard,
        title: 'Accessible and Convenient',
        description: 'Access the app from anywhere, anytime, stay on top of your finances. No unnecessary fees, and manage your finances with ease.'
    },
    {
        id: 2,
        icon: iconLamp,
        title: 'Personalized Suggestions',
        description: 'Our app analyzes your spending patterns and offers advice to help you improve your habits, helping you save more and spend less.'
    },
    {
        id: 3,
        icon: iconCoin,
        title: 'Improved Financial Management',
        description: 'Our budgeting app provides a complete overview of your finances. Track your spending, set budgets, and monitor your progress.'
    },
    {
        id: 4,
        icon: iconChart,
        title: 'Automated expenses',
        description: 'Automatically categorizes your transactions, making it easier to monitor your spending and budgeting.'
    }
]

export const benefitLists = [
    {
        id: 1,
        icon: lists,
        text: 'Accessible and Convenient'
    },
    {
        id: 2,
        icon: lists,
        text: 'Personalized Suggestions'
    },
    {
        id: 3,
        icon: lists,
        text: 'Improved Financial Management'
    },
    {
        id: 4,
        icon: lists,
        text: 'Automated expenses'
    }
]

export const testimonialLists = [
    {
        id: 1,
        photo: profile,
        name: 'Chamlikra Shevin',
        address: 'London',
        title: 'Game Changer',
        text: 'Its been a game changer for me. Before, I would often overspend without realizing it. But with this app, I can easily see where my money is going and set budgets to stay on track.',
        rating: 5
    },
    {
        id: 2,
        photo: profile2,
        name: 'John Nima',
        address: 'Newcastle',
        title: 'More control of my finances',
        text: 'Ive been able to save more money and feel more in control of my finances. I would definitely recommend this app to anyone who wants to take control of their finances.',
        rating: 5
    },
    {
        id: 3,
        photo: profile,
        name: 'Endrick Lamar',
        address: 'Manchester',
        title: 'Nice app for financial balance',
        text: 'Ive been able to save more money and feel more in control of my finances. I would definitely recommend this app to anyone who wants to take control of their finances.',
        rating: 5
    }
]

export const footLists = ['FAQ\'S', 'Contact us', 'Terms & Conditions', 'Privacy Policy']
export const socialMedia = [instagram, facebook, twitter, linkedin]