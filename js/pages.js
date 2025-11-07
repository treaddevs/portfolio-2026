export const pages = {
    navimental: {
        tabImg: "/svg/tab.svg",
        title: "Mental Healthcare<br>Data Visualization",
        heroImage: "/images/navi-gradient.png",
        heroDesc: "I worked for Navimental, a foundational platform<br>addressing youth mental health challenges",
        logo: "/images/navi-logo.png",
        heroLink: "https://navimental.com",
        sections: [
            {
                type: "video",
                src: "/videos/navi-demo.mp4",
            },
            {
                heading: "The problem",
                text: "In 2024, Navimental was born during a hackathon. While the initial product framework was in place, the journal section's data display required redesign. This project focused on designing an intuitive dashboard to help users access and visually interpret this information."
            },
            {
                type: "image",
                src: "/images/navi-journal-entry.png"
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
            },
            {
                type: "image",
                src: "/images/navi-dashboard.png",
            },
            {
                heading: "Project partners",
                text: "Navimental has been accepted into the 2025 Future of Healthcare Founder Residency at Northeastern University’s campus in Portland, Maine and is collaborating with several regional partner organizations.",
            },
            {
                type: "image",
                src: "/images/navi-partners.png",
            },
        ]
    },
    via: {
        tabImg: "/svg/tab.svg",
        title: "AI-integrated<br>Chatbot",
        heroImage: "/images/chatbot-gradient.png",
        heroDesc: "I worked for the VIA Agency – developing web<br>components for the redesigned company website<br>and building a chatbot for a client",
        logo: "/images/chatbot-logo.png",
        heroLink: "https://www.theviaagency.com/",
        sections: [
            {
                type: "video",
                src: "/videos/via-demo.mp4",
            },
            {
                heading: "The challenge",
                text: `I began my position as Creative Technology Intern at the VIA Agency by developing mobile-friendly web components for the redesigned company website. Once the new site had launched, a company challenge emerged. AI-infused July was a team challege to integrate artificial intelligence in useful ways to enhance advertising.<br><br>Our team chose to build an AI-powered chatbot to assist our client – ARM & HAMMER<sup style="font-size: 0.7em;">™</sup> Baking Soda, in generating in-depth responses to customer's questions, and for embedding on their product's <a href="https://www.armandhammer.com/en/for-everything-soda" target="_blank" style="color: #00c3ff">webpage</a>.`,
            },
            {
                type: "image",
                src: "/images/chatbot-figma.png",
            },
            {
                heading: "Product development",
                text: `I created an initial mockup design in Figma to share with the team. After this was approved, a team member created a logo for the chatbot that we dubbed the "Boredom-Blaster". Development was done using the <a href="https://www.botpress.com/" target="_blank" style="color: #00c3ff">Botpress</a> platform. This involved connecting nodes to direct the flow of the conversation, training the knowledge base to access web page data containing project examples, and adding a policy agent to avoid discussing competitors.`,
            },
            {
                type: "image",
                src: "/images/botpress.png",
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
            },
        ]
    },
    esol: {
        tabImg: "/svg/tab.svg",
        title: "Communication App<br>for ESOL Educators",
        heroImage: "/images/esol-gradient.png",
        heroDesc: "This project provided Portland, Maine's ESOL Collaborative<br>with a centralized platform for communication",
        logo: "/images/esol-logo.png",
        heroLink: "https://github.com/treaddevs/esol-app/tree/main",
        sections: [
            {
                type: "video",
                src: "/videos/esol-demo.mp4",
            },
            {
                heading: "The problem",
                text: `
                    Our team held several meetings with department leadership and service providers of the <a href="https://www.portlandmaine.gov/1537/ESOL-Collaborative" target="_blank" style="color: #00c3ff">ESOL Collaborative</a> to gather requirements and define the scope of the project. We discussed the difficulties experienced communicating effectively amongst members, the desire for resource sharing, and the issue of consistent data collection – including class attendance.<br><br>
                    We agreed that our software solution needed to target three main areas: 
                    <ol>
                        <li>Communication</li>
                        <li>Resouce Sharing</li>
                        <li>Scheduling</li>
                    </ol>
                `,
            },
            {
                type: "image",
                src: "/images/esol-collaborative.png",
            },
            {
                heading: "Communication",
                text: "The application's home feed serves as the central hub of communication. Users can create new posts, tag others, like and comment, and save post to bookmarks. The trending topics sidebar updates hourly based on the most frequently used hashtags. Clicking on a hashtag redirects users to a dedicated page that filters posts containing the selected keyword and features corresponding content.",
            },
            {
                type: "image",
                src: "/images/esol-home.png",
            },
            {
                heading: "Resource sharing",
                text: `File uploads for posts are supported via <a href="https://uploadthing.com/" target="_blank" style="color: #00c3ff">UploadThing</a>, allowing a maximum file size of 4MB for images and 64MB for videos. Uploading can be achieved by clicking the attachments button or drag-and-dropping media files onto a post. A daily cron job automatically clears any unused or orphaned media files.`,
            },
            {
                type: "image",
                src: "/images/esol-drag-drop.png",
            },
            {
                type: "image",
                src: "/images/esol-media.png",
            },
            {
                heading: "Scheduling",
                text: `Direct messaging allows users to correspond synchronously and schedule meetings. This is achieved through <a href="https://getstream.io/chat/sdk/" target="_blank" style="color: #00c3ff">Stream Chat SDK</a> via API, which provides free access for eligible small teams and early-stage projects.`,
            },
            {
                type: "image",
                src: "/images/esol-chat.png",
            },
        ]
    }
}
