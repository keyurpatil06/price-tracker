# E-commerce Price Tracker

## Description
A web application that allows users to input Amazon product links to scrape and display product details, providing insights into tracked items. Users can opt-in for email notifications to receive updates on product availability and price changes.

## Features
- **Search Bar:** Input Amazon product links to scrape data.
- **Product Details Display:** Showcases product image, title, pricing, and other relevant information scraped from the original website.
- **Email Opt-in:** Created a modal for users to provide email addresses and opt-in for tracking.
- **Automated Scraping:** Utilized cron jobs to automate periodic scraping for up-to-date data.
- **Email Alerts:** Configured email alerts for various scenarios like back in stock or lowest price notifications.

## Tech Stack
- **Frontend:** Next.js, Headless UI, Tailwind CSS
- **Backend:** Bright Data, Cheerio, Nodemailer, MongoDB