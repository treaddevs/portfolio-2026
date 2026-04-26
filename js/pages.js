export const pages = {
    navimental: {
        tabImg: "/svg/tab.svg",
        title: "Mental Healthcare<br>Data Visualization",
        heroImage: "/images/navi-gradient.png",
        heroDesc: "I worked for Navimental, a foundational platform<br>addressing youth mental health challenges",
        logo: "/images/navi-logo.png",
        logoAlt: "Navimental stars logo",
        heroLink: "https://navimental.com",
        sections: [
            {
                type: "video",
                src: "/videos/navi-demo.mp4",
                alt: "Video of Navimental journal data dashboard"
            },
            {
                heading: "The problem",
                text: "In 2024, Navimental was born during a hackathon. While the initial product framework was in place, the journal section's data display required redesign. This project focused on designing an intuitive dashboard to help users access and visually interpret this information."
            },
            {
                type: "image",
                src: "/images/navi-journal-entry.png",
                alt: "Navimental data entry form for journal"
            },
            {
                heading: "Journal dashboard",
                text: `
                    The journal form captures key metrics, including: 
                    <ol>
                        <li>Mood</li>
                        <li>Activities</li>
                        <li>Sleep</li>
                        <li>Symptoms</li>
                        <li>Quick Note</li>
                    </ol>
                    I redesigned the journal dashboard to visualizes these inputs in a time series format, helping parents track trends, monitor progress, and offer insights to collaborate with family support navigators.
                `,
            },
            {
                type: "image",
                src: "/images/navi-streak.png",
                alt: "Hot streak for posting journal entries"
            },
            {
                type: "image",
                src: "/images/navi-dashboard.png",
                alt: "Navimental journal data dashboard"
            },
            {
                heading: "Testimonials",
                text: "Insights gathered through user research, interviews, and stakeholder feedback that helped shape and refine the final product experience."
            },
            {
                type: "image",
                src: "/images/navi-testimonial.png",
                alt: "Navimental testimonial: Everything I wish I had when raising my daughter"
            },
            {
                type: "image",
                src: "/images/navi-peer-sessions.png",
                alt: "Navimental 1 on 1 peer sessions"
            },
            {
                type: "image",
                src: "/images/navi-care-plan.png",
                alt: "Navimental care plan"
            },
            {
                type: "image",
                src: "/images/navi-parent-community.png",
                alt: "Navimental parent community"
            },
            {
                type: "image",
                src: "/images/navi-guides.png",
                alt: "Navimental guides"
            },
            {
                heading: "Project partners",
                text: "Navimental has been accepted into the 2025 Future of Healthcare Founder Residency at Northeastern University’s campus in Portland, Maine and is collaborating with several regional partner organizations.",
            },
            {
                type: "image",
                src: "/images/navi-partners.png",
                alt: "Partnering with Maine's leading organizations: MaineHealth, Northern Light Health, Maine Venture Fund, Northeastern University's Roux Institute"
            },
        ]
    },
    pocketchef: {
        tabImg: "/svg/tab.svg",
        title: "Recipe & Meal<br>Planning App",
        heroImage: "/images/pocketchef-gradient.png",
        heroDesc: "I conducted user research and designed screen flows for<br>a recipe and meal planning application",
        logo: "/images/pocketchef-logo.png",
        logoAlt: "Canopy Banking logo",
        heroLink: "https://www.figma.com/design/LuysxxgvINMgyiW4gxUMeo/Pocket-Chef---Recipe---Meal-Planning-App?node-id=0-1&t=zoeKuFq6kc8XPpc1-1",
        sections: [
            {
                type: "video",
                src: "/videos/pocketchef-demo.mp4",
                alt: "Video of Figma presentation showing PocketChef App screens presented on iPhone 16 devices"
            },
            {
                heading: "The Problem",
                text: `Users currently rely on fragmented and inefficient methods to find, plan, and manage meals, often using general tools like search engines, social media, or ad hoc solutions such as screenshots and printed recipes. This lack of a centralized system leads to disorganized recipe management and inconsistent meal planning habits. At the same time, users face significant friction in decision-making, with time, ingredient availability, and ease of cooking being the most critical constraints.<br><br>
                Additionally, users struggle during execution: dealing with missing ingredients, complex steps, and recipes that don’t align with their dietary needs. While there is interest in smarter, AI-assisted solutions, trust remains cautious, and users prioritize simplicity, speed, and convenience above all else. Overall, there is a clear opportunity to streamline the entire cooking workflow from discovery to planning, shopping, and cooking into a more intuitive and efficient experience.`,
            },
            {
                type: "image",
                src: "/images/pocketchef-user-journey.png",
                alt: "Recipe and meal planning user journey"
            },
            {
                heading: "Survey Insights",
                text: `The survey results show that recipe discovery and meal planning are fragmented and inconsistent. Most users rely on general tools like Google search, with relatively few using dedicated recipe platforms, highlighting a lack of centralized solutions. Meal planning is also irregular, with many users rarely planning ahead. Across responses, time and convenience emerge as the dominant factors in decision-making, with users prioritizing quick, simple recipes and citing long preparation time as their biggest frustration.<br><br>
                Users also face significant challenges during cooking and organization, including missing ingredients, complex execution, and disorganized recipe storage (screenshots, printouts, or no system at all). This points to a clear opportunity for a more unified, intuitive system that supports the full cooking workflow. High-value features include ingredient-based recommendations, grocery list generation, and meal planning tools. While users show cautious openness to AI assistance, trust remains limited, reinforcing the need for simple, transparent, and efficiency-focused design.`,
            },
            {
                type: "image",
                src: "/images/pocketchef-survey-insights.png",
                alt: "PocketChef recipe & meal planning app survey insights"
            },
            {
                heading: "Onboarding and Discovery",
                text: `The onboarding flow introduces users to the app with a brief brand introduction followed by dietary preference selection, including restrictions, allergies, and cooking skill level to enable personalization. A profile section allows users to update these settings over time, ensuring recommendations stay relevant.<br><br>
                In the discovery experience, users browse AI-recommended recipes through an intention-based system rather than traditional categories. Core filters: Fast, Easy, Healthy, Stocked, and Comfort let users quickly express what they want to cook based on context, reducing cognitive load and making recipe selection more intuitive. A “Filter by Ingredients” feature further supports this by generating recipes based on what users already have at home, helping reduce missing-ingredient friction and food waste.<br><br>
                An Imports screen centralizes external recipe collection, allowing users to save content by scanning photos of handwritten or printed recipes or pasting links from websites and social media. This creates a unified system for storing and organizing recipes that are typically scattered across screenshots, bookmarks, and notes.`,
            },
            {
                type: "image",
                src: "/images/pocketchef-app-setup.png",
                alt: "PocketChef setup with user preferences, discovery feed, filter by ingredients, and import screens"
            },
            {
                heading: "Core Features",
                text: `The app’s core functionality centers around saving recipes and organizing them into personalized cookbooks, creating a structured system for users to collect and revisit meals. Each recipe detail page includes an image, description, ingredient list, and nutrition information displayed through an adjustable donut chart that updates based on serving size. Users can follow step-by-step instructions in a standard view or switch to a guided cooking mode, which improves readability and supports real-time cooking with larger text, timers, and a read-aloud feature that presents instructions sequentially through voice and step cards. This read-aloud functionality also serves as an accessibility feature, supporting users with visual impairments, reading difficulties, or hands-free cooking needs.<br><br>
                The Meal Planner provides a weekly overview of breakfast, lunch, and dinner through large, interactive recipe cards, making it easy to visualize and adjust meals across the week while reducing decision fatigue. Supporting this, the Grocery List feature automatically compiles ingredients from selected meals and organizes them into categorized, checkable lists, streamlining shopping and ensuring a smooth transition from planning to execution.`,
            },
            {
                type: "image",
                src: "/images/pocketchef-app-features.png",
                alt: "PocketChef core features including Recipes with a description, nutrition information, step-by-step instructions and guided mode, and Meal Planner and Grocery List features"
            },
            {
                heading: "Design System",
                text: `The PocketChef design system establishes a consistent and scalable foundation through clearly defined components, styles, and semantic design tokens. It includes a structured token system covering color (e.g., color.primary.500, color.text.secondary), a 4px spacing scale (spacing.1–spacing.12), typography, and border radius (radius.sm through radius.full). Typography is standardized using Poppins ExtraBold for branding, Lexend across a full heading scale (H1–H6), and Plus Jakarta Sans for body text, ensuring clarity and hierarchy across the interface. The color system incorporates brand tones like Harvest Orange and Primary Yellow, alongside neutral backgrounds, text hierarchies, UI element colors, and gradients for headers and buttons.<br><br>
                Built on top of these tokens, the system includes reusable UI components such as buttons (primary, secondary, disabled), recipe cards, pills for dietary tags, a navigation bar with clear selected states, and timeline/progress indicators. This cohesive system not only ensures visual consistency and accessibility but also supports efficient design iteration and seamless developer handoff, making the product easier to scale and maintain.`,
            },
            {
                type: "image",
                src: "/images/pocketchef-design-system.png",
                alt: "PocketChef design system"
            },
            {
                heading: "Summary",
                text: `PocketChef is an AI-assisted recipe and meal planning app that unifies the end-to-end cooking experience into a single, streamlined system. It addresses key pain points identified in research: fragmented recipe discovery, inconsistent meal planning, disorganized recipe storage, and friction during cooking caused by missing ingredients, time constraints, and complex execution.<br><br>
                By connecting discovery, imports, planning, and execution, the app enables users to move seamlessly from finding recipes to cooking them. Intention-based filters (Fast, Easy, Healthy, Stocked, Comfort) and ingredient-based search simplify discovery, while imports centralize external recipes. Meal planning and automated grocery lists reduce planning effort, and guided cooking mode with timers, larger text, and read-aloud accessibility support helps users cook with confidence and minimal friction.<br><br>
                Overall, PocketChef improves clarity, speed, and organization across the entire cooking workflow, turning a fragmented set of tasks into a cohesive and intuitive experience.`,
            },
        ]
    },
    canopy: {
        tabImg: "/svg/tab.svg",
        title: "Mobile Banking App",
        heroImage: "/images/canopy-gradient.png",
        heroDesc: "I designed onboarding, account access, and transaction<br>user interfaces and screen flows for a mobile banking application",
        logo: "/images/canopy-logo.png",
        logoAlt: "Canopy Banking logo",
        heroLink: "https://www.figma.com/board/WUE8RneYcQNQmPTElQTUuo/Canopy-Banking-App?node-id=0-1&t=ZhAkmDOMkfc4gNzJ-1",
        sections: [
            {
                type: "video",
                src: "/videos/canopy-demo.mp4",
                alt: "Video of Figma presentation showing Canopy App screens presented on iPhone 16 devices"
            },
            {
                heading: "Product design",
                text: `I conducted this product design case study to create high-fidelity screen flows for a mobile banking mobile application. This project is comprised of sections for onboarding, account screens for checking and savings, and multiple transactions desirable for an online banking experience.`,
            },
            {
                type: "image",
                src: "/images/canopy-debit-card.png",
                alt: "Canopy debit card"
            },
            {
                heading: "Onboarding",
                text: `Account sign up starts with a few onboarding screens to pitch the product and encourage users to commit to their initial curiosity about the app. After this, users provide basic account set up information including a username, phone number, email, and password to sign up. When the user is ready to log in they can select the checkbox to be remembered in the system which enables Face ID to expedite the sign in process.`,
            },
            {
                type: "image",
                src: "/images/canopy-onboarding.png",
                alt: "Canopy onboarding screens including sign up and sign in interfaces"
            },
            {
                heading: "Canopy checking",
                text: `From the account screen users can access their checking account by clicking on the arrow to the right of their checking account balance. The second screen displays checking account information including the most recent and pending transactions. Using the navigation bar below the Available Balance modal users can select the Insights button to access analytics and trends related to their spending habits.`,
            },
            {
                type: "image",
                src: "/images/canopy-checking.png",
                alt: "Canopy account screens including account balance, checking, and spending insights screens"
            },
            {
                heading: "Canopy savings",
                text: `From the account screen users can access their savings account by clicking on the arrow to the right of their savings acocunt balance. The second screen displays savings account information including the most recent and pending deposits. The last screen shows the users set Savings Goal entries which, for this user, includes an existing car loan and home down payment.`,
            },
            {
                type: "image",
                src: "/images/canopy-savings.png",
                alt: "Canopy account screens including account balance, savings, and spending goal screens"
            },
            {
                heading: "Transactions",
                text: `This series of user interface screens shows many of the available transactions including: deposits, money transfers, bill pay, card management, and application settings. Checks can be deposited utilizing the camera buttons. Money can be transferred from the Account Balance or by linking an external bank account. Bill Pay enables recurring bill payment transactions which are visible below the input fields. Card management allows users to freeze their card, report card issues, and reset their PIN. Lastly, the More button's menu is comprised of many relevant application settings, features, and additional products.`,
            },
            {
                type: "image",
                src: "/images/canopy-nav.png",
                alt: "Nav bar buttons for deposit, transfer, bill pay, insights, and card"
            },
            {
                type: "image",
                src: "/images/canopy-transactions.png",
                alt: "Transaction screens for depositing checks, transferring money, bill pay, card managment, and menu settings"
            },
        ]
    },
    solana: {
        tabImg: "/svg/tab.svg",
        title: "Home Solar<br>Dashboard UI",
        heroImage: "/images/solana-gradient.png",
        heroDesc: "I created a solar dashboard to display<br>controls and check on system operations",
        logo: "/images/solana-logo.png",
        logoAlt: "Solar home logo",
        heroLink: "https://www.figma.com/board/sEIZQN6ilYyNPCUMOeAWxs/Home-Solar-App?node-id=0-1&t=tJj9TqlUsaUHv2B5-1",
        sections: [
            {
                type: "image",
                src: "/images/solana.png",
                alt: "Dashboard display with controls as widgets in user interface"
            },
            {
                heading: "Centralized control",
                text: "Any complex system requires easy access to relevant information and the ability to quickly adjust controls as needed. This home solar dashboard leverages widget-based architecture for increased customization and control. This comprehensive display allows users to compare and contrast multiple data points, allowing operators to respond to system conditions and make immediate decisions."
            },
            {
                type: "image",
                src: "/images/solar-worker.png",
                alt: "Photo of man installing solar panels on the roof of a multi-unit building"
            },
            {
                heading: "Key metrics",
                text: `
                    The dashboard tracks important information, including: 
                    <ol>
                        <li>Power Generation</li>
                        <li>Current State</li>
                        <li>Temperature</li>
                        <li>Weather Forecast</li>
                        <li>Metering</li>
                    </ol>
                    I designed the solar dashboard to display these inputs in an overview panel, helping operators view live system feedback, monitor conditions, and make informed decisions.
                `,
            },
            {
                type: "image",
                src: "/images/solar-carport.png",
                alt: "Solar panels over a carport with a white SUV parked underneath"
            },
            {
                heading: "Adaptability",
                text: "The success of a software solution is dependent on it's ability to adapt to and address user needs. This design offers both a plethora of useful insights, and the ability to control the display inputs. This combination makes the system adaptable for users to make modifications and customize their experience."
            },
            {
                type: "image",
                src: "/images/solar-farm.png",
                alt: "Solar panels on farmland with Fall foliage in background"
            },
        ]
    },
    via: {
        tabImg: "/svg/tab.svg",
        title: "AI-integrated<br>Chatbot",
        heroImage: "/images/chatbot-gradient.png",
        heroDesc: "I worked for the VIA Agency – developing web<br>components for the redesigned company website<br>and building a chatbot for a client",
        logo: "/images/chatbot-logo.png",
        logoAlt: "Boredom-Blaster chatbot robot head logo",
        heroLink: "https://www.theviaagency.com",
        sections: [
            {
                type: "video",
                src: "/videos/via-demo.mp4",
                alt: "Video of The VIA Agency's new website and my coding contributions"
            },
            {
                heading: "The challenge",
                text: `I began my position as Creative Technology Intern at the VIA Agency by developing mobile-friendly web components for the redesigned company website. Once the new site had launched, a company challenge emerged. AI-infused July was a team challege to integrate artificial intelligence in useful ways to enhance advertising.<br><br>Our team chose to build an AI-powered chatbot to assist our client – ARM & HAMMER<sup style="font-size: 0.7em;">™</sup> Baking Soda, in generating in-depth responses to customer's questions, and for embedding on their product's <a href="https://www.armandhammer.com/en/for-everything-soda" target="_blank" style="color: #00c3ff">webpage</a>.`,
            },
            {
                type: "image",
                src: "/images/chatbot-figma.png",
                alt: "Chatbot mockup design in Figma"
            },
            {
                heading: "Product development",
                text: `I created an initial mockup design in Figma to share with the team. After this was approved, a team member created a logo for the chatbot that we dubbed the "Boredom-Blaster". Development was done using the <a href="https://www.botpress.com/" target="_blank" style="color: #00c3ff">Botpress</a> platform. This involved connecting nodes to direct the flow of the conversation, training the knowledge base to access web page data containing project examples, and adding a policy agent to avoid discussing competitors.`,
            },
            {
                type: "image",
                src: "/images/chatbot-flowchart.png",
                alt: "Flowchart diagram of user flow using Botpress chatbot"
            },
            {
                type: "image",
                src: "/images/botpress.png",
                alt: "Screenshot of building on Botpress platform"
            },
            {
                heading: "Completed chatbot",
                text: `
                    After adding styling the chatbot was completed. Powered by ChatGPT, it is able propose project ideas, offer recipe suggestions, and respond to other requests for information about ARM & HAMMER<sup style="font-size: 0.7em;">™</sup> Baking Soda. Check out the chat icon embedded at the top of this page, or click below to start a conversation in a new window!<br><br>
                    <a 
                    href="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=4c581baa-e3ee-47c6-a7e3-604474bb3b8f"
                    class="chatbot-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    💬 Chat with Boredom-Blaster!
                    </a>
                `,
            },
            {
                type: "image",
                src: "/images/chatbot-poster.png",
                alt: "Image of full chatbot robot logo with chat bubbles next to the chatbot user interface displayed on an iPhone screen"
            },
        ]
    },
    esol: {
        tabImg: "/svg/tab.svg",
        title: "Communication App<br>for ESOL Educators",
        heroImage: "/images/esol-gradient.png",
        heroDesc: "This project provided Portland, Maine's ESOL Collaborative<br>with a centralized platform for communication",
        logo: "/images/esol-logo.png",
        logoAlt: "Portland Maine ESOL Collaborative chat bubbles logo",
        heroLink: "https://github.com/treaddevs/esol-app/tree/main",
        sections: [
            {
                type: "video",
                src: "/videos/esol-demo.mp4",
                alt: "Video of the Communication App for ESOL Educators"
            },
            {
                heading: "The problem",
                text: `
                    Our team held several meetings with department leadership and service providers of the <a href="https://www.portlandmaine.gov/1537/ESOL-Collaborative" target="_blank" style="color: #00c3ff">ESOL Collaborative</a> to gather requirements and define the scope of the project. We discussed the difficulties experienced communicating effectively amongst members, the desire for resource sharing, and the issue of consistent data collection – including class attendance.<br><br>
                    We agreed that our software solution needed to target three main areas: 
                    <ol>
                        <li>Communication</li>
                        <li>Resource Sharing</li>
                        <li>Scheduling</li>
                    </ol>
                `,
            },
            {
                type: "image",
                src: "/images/esol-collaborative.png",
                alt: "Portland Maine ESOL Collaborative logo"
            },
            {
                heading: "Communication",
                text: "The application's home feed serves as the central hub of communication. Users can create new posts, tag others, like and comment, and save post to bookmarks. The trending topics sidebar updates hourly based on the most frequently used hashtags. Clicking on a hashtag redirects users to a dedicated page that filters posts containing the selected keyword and features corresponding content.",
            },
            {
                type: "image",
                src: "/images/esol-home.png",
                alt: "Screenshot of app homepage feed"
            },
            {
                heading: "Resource sharing",
                text: `File uploads for posts are supported via <a href="https://uploadthing.com/" target="_blank" style="color: #00c3ff">UploadThing</a>, allowing a maximum file size of 4MB for images and 64MB for videos. Uploading can be achieved by clicking the attachments button or drag-and-dropping media files onto a post. A daily cron job automatically clears any unused or orphaned media files.`,
            },
            {
                type: "image",
                src: "/images/esol-drag-drop.png",
                alt: "Screenshot of drag-and-drop file behavior for uploading"
            },
            {
                type: "image",
                src: "/images/esol-media.png",
                alt: "Screenshot of posts with picture and video attachments"
            },
            {
                heading: "Scheduling",
                text: `Direct messaging allows users to correspond synchronously and schedule meetings. This is achieved through <a href="https://getstream.io/chat/sdk/" target="_blank" style="color: #00c3ff">Stream Chat SDK</a> via API, which provides free access for eligible small teams and early-stage projects.`,
            },
            {
                type: "image",
                src: "/images/esol-chat.png",
                alt: "Screenshot of users chatting in messages using the Stream Chat software development kit"
            },
        ]
    }
}