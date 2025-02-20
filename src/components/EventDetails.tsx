import { useState } from "react";
import TitledCard from "./TitledCard";

interface EventData {
  title: string;
  description: string;
  rules: string[];
  image?: string;
}

interface EventCategory {
  title: string;
  cardCount: number;
  events: {
    title: string;
    data: EventData;
  }[];
}

const eventCategories: EventCategory[] = [
  {
    title: "Technical Events",
    cardCount: 5,
    events: [
      {
        title: "Hackathon",
        data: {
          title: "Paper Presentation",
          description:
            "Welcome to the world of ideas and research! We proudly present the Paper Presentation event, where participants showcase innovative research, technical advancements, and groundbreaking ideas in various engineering domains. Join us in exploring new possibilities through knowledge and presentation skills.",
          rules: [
            "All participants must wear their college ID card.",
            "Each team can have a maximum of 3 members.",
            "Participants must bring their presentation in PPT.",
            "Presentations must be within the time limit specified by the organizers.",
            "Participants will be evaluated based on content clarity, research depth, presentation skills, and innovation.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://mariangelf.com/wp-content/uploads/2020/08/presentation-1200x675.png",
        },
      },
      {
        title: "Code Quest",
        data: {
          title: "Project Expo",
          description:
            "Welcome to the heart of innovation! We proudly present the Project Expo, a showcase of cutting-edge projects that redefine the boundaries of technology. Join us in exploring a world where innovation meets real-world solutions.",
          rules: [
            "All participants must wear their college ID card.",
            "Each team can have a maximum of 3 members.",
            "Participants must bring their own laptop/flash cards for presentation purposes.",
            "Participants will be evaluated based on communication, clarity of their project, depth of knowledge, and creativity.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://img.freepik.com/free-vector/isometric-expo-flowchart-composition-with-isolated-s-exhibit-booths-stands-people-stage-performance_1284-27644.jpg",
        },
      },
      {
        title: "Tech Talk",
        data: {
          title: "Web Designing",
          description:
            "Welcome to the world of creativity and innovation! Web Designing is a competitive event where participants must recreate a given website theme while adding their own creative touch. Show off your design skills and create a user-friendly, responsive website.",
          rules: [
            "All participants must wear their college ID card.",
            "Each team can have a maximum of 3 members.",
            "A predefined website theme will be given, and participants must recreate it while adding enhancements.",
            "Participants must use HTML, CSS, JavaScript, or any front-end framework.",
            "Evaluation will be based on theme accuracy, creativity, responsiveness, and user experience.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://intersmart.ae/wp-content/uploads/2024/10/What-is-web-designing.webp",
        },
      },
      {
        title: "Web Workshop",
        data: {
          title: "UI Designing",
          description:
            "Unleash your creativity! UI Designing challenges participants to design a visually appealing and user-friendly interface based on a given concept. Bring your design ideas to life with your innovation and aesthetic sense.",
          rules: [
            "All participants must wear their college ID card.",
            "Each team can have a maximum of 3 members.",
            "A problem statement or theme will be provided at the start.",
            "Participants must use Figma, Adobe XD, or any UI design tool to create their design.",
            "Designs will be evaluated based on creativity, usability, visual appeal, and theme accuracy.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://www.extwebtech.com/wp-content/uploads/2023/10/UI-UX-designer.webp",
        },
      },
      {
        title: "AI Workshop",
        data: {
          title: "Code Golf",
          description:
            "Step into the ultimate coding challenge! Code Golf is a test of programming efficiency where participants must solve coding problems using the shortest possible code. Show off your coding skills and logic in the most optimized way!",
          rules: [
            "All participants must wear their college ID card.",
            "This is an individual event.",
            "Coding problems will be provided, and solutions must be written in Python, C, C++, or Java.",
            "The shortest and most efficient code wins.",
            "Participants will be evaluated on code correctness, optimization, and execution time.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://media.istockphoto.com/id/1148185998/vector/digital-java-code-text-computer-software-coding-vector-concept-programming-coding-script.jpg?s=612x612&w=0&k=20&c=a828FuiFmSROCCmc7glJKr1DSxakHEvpdq58D_m3TVw=",
        },
      },
    ],
  },
  {
    title: "Non-Technical Events",
    cardCount: 5,
    events: [
      {
        title: "Art Exhibition",
        data: {
          title: "Photography",
          description:
            "Capture the world through your lens! The Photography contest challenges participants to showcase their creativity and storytelling skills through stunning photographs. Whether it's nature, portrait, or abstract, let your pictures speak a thousand words.",
          rules: [
            "All participants must wear their college ID card.",
            "This is an individual event.",
            "Participants must submit original photographs taken by them.",
            "Basic editing is allowed, but excessive manipulation is not permitted.",
            "Photos will be evaluated based on composition, creativity, clarity, and storytelling.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://img.freepik.com/free-vector/huge-camera-tiny-people-taking-pictures-photographer-with-camera-photos-landscapes-flat-vector-illustration-photography-occupation-concept-banner-website-design-landing-web-page_74855-23089.jpg",
        },
      },
      {
        title: "Music Night",
        data: {
          title: "Pandora Pulse",
          description:
            "Test your knowledge and bidding skills in this thrilling event! Compete in a bid-and-guess challenge for movies and songs. Stay sharp, bid smart, and prove your expertise!",
          rules: [
            "Teams can have up to 3 members; solo and duo participation allowed.",
            "Event consists of 3 rounds:",
            "Round 1: Teams start with 1000 points to bid on movie titles. If they own the correct card, they must raise their hand and submit it to earn points. Some dialogues will be removed for added challenge.",
            "Round 2: Song lyrics will be shown in English. A team member must slap a spoon on a vessel (buzzer) and then sing the song in Tamil.",
            "Round 3: Identify the movie from four scene frames. No clues provided.",
            "Winners will be chosen based on overall performance.",
          ],
          image:
            "https://th.bing.com/th/id/OIP.pjnovaNjr7F21Ba8NkYr3wHaHa?rs=1&pid=ImgDetMain",
        },
      },
      {
        title: "Quiz Competition",
        data: {
          title: "Adzap",
          description:
            "Unleash your creativity and marketing skills! Adzap is a fun event where participants must create and present an engaging advertisement for a given product or concept. Use humor, persuasion, and creativity to impress the judges!",
          rules: [
            "All participants must wear their college ID card.",
            "This is an individual event.",
            "A product or topic will be given on the spot, and teams must create a short ad within the time limit.",
            "Use of props and acting is encouraged to make the ad more engaging.",
            "Participants will be evaluated based on creativity, humor, message clarity, and presentation.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://static.vecteezy.com/system/resources/previews/002/314/283/non_2x/mobile-marketing-web-concept-with-people-vector.jpg",
        },
      },
      {
        title: "Talent Show",
        data: {
          title: "Meme Creation",
          description:
            "Get ready to tickle everyone's funny bone! Meme Creation is an event where participants must create humorous and impactful memes on a given theme. Show off your wit and creativity in the world of memes!",
          rules: [
            "All participants must wear their college ID card.",
            "This is an individual event.",
            "Participants must create original memes based on the given theme.",
            "Memes can be created using any digital tool but must be free of offensive or inappropriate content.",
            "Participants will be evaluated based on humor, originality, creativity, and relevance to the theme.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fi1Ya2i-Br7j1U4S5WHveT-jbk1mAMNUEA&s",
        },
      },
      {
        title: "Dance Competition",
        data: {
          title: "Connection",
          description:
            "Test your logical reasoning and creativity! Connection is a fun and challenging event where participants must find the hidden link between given clues. Think out of the box and connect the dots!",
          rules: [
            "All participants must wear their college ID card.",
            "Two members can participate.",
            "Various sets of images, words, or puzzles will be given, and participants must identify the correct connection.",
            "Time will be a key factor in determining winners.",
            "Participants will be evaluated based on accuracy, speed, and logical thinking.",
            "Winners will be chosen based on the above criteria.",
          ],
          image:
            "https://img.freepik.com/free-vector/abstract-pattern-design_1197-1.jpg",
        },
      },
    ],
  },
  {
    title: "Online Events",
    cardCount: 1,
    events: [
      {
        title: "Virtual Conference",
        data: {
          title: "Free Fire",
          description:
            "Gear up for an intense battle! Free Fire – Bermuda Battle is a solo survival event where participants will compete on the Bermuda map. Outsmart, outplay, and outlast your opponents to secure the ultimate victory—only one champion will emerge!",
          rules: [
            "This is a solo event.",
            "The game will be played on the Bermuda map.",
            "Participants must use their own devices and ensure a stable internet connection.",
            "Any form of cheating, hacking, or exploiting bugs will result in immediate disqualification.",
            "Only one winner will be declared as the champion.",
            "Respect and fair play are mandatory—unsportsmanlike behavior may lead to disqualification.",
          ],
          image:
            "https://th.bing.com/th/id/OIP.7EQsvOrwJV9Oj7fgxeiCPwHaEK?rs=1&pid=ImgDetMain",
        },
      },
    ],
  },
];

const createEventCard = (eventData: EventData) => ({
  imageSrc: eventData.image, // Use event-specific image or a placeholder
  containerHeight: "280px",
  containerWidth: "90%",
  imageHeight: "220px",
  imageWidth: "90%",
  rotateAmplitude: 12,
  scaleOnHover: 1.2,
  showTooltip: false,
  displayOverlayContent: true,
  overlayContent: (
    <div className="backdrop-blur-sm rounded-[15px] w-full h-full flex flex-col items-center justify-center p-4 text-white">
      <h3 className="text-xl font-bold mb-2 bg-black/75 px-4 py-2 rounded-lg">
        {eventData.title}
      </h3>
    </div>
  ),
  eventData,
});

const EventsDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderCards = () => {
    const events = eventCategories[activeTab].events;

    if (eventCategories[activeTab].cardCount === 1) {
      return (
        <div className="grid grid-cols-1 gap-4">
          <div className="w-full max-w-sm mx-auto">
            <TitledCard {...createEventCard(events[0].data)}>Hello</TitledCard>
          </div>
        </div>
      );
    }

    const firstRow = events.slice(0, 3);
    const secondRow = events.slice(3, 5);

    return (
      <>
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {firstRow.map((event, cardIndex) => (
            <div key={cardIndex} className="w-full">
              <TitledCard {...createEventCard(event.data)}>Hello</TitledCard>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 mx-auto">
          {secondRow.map((event, cardIndex) => (
            <div key={cardIndex} className="w-full">
              <TitledCard {...createEventCard(event.data)}>Hello</TitledCard>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto lg:px-16 sm:px-8 px-12">
      <div className="flex justify-center space-x-4 mb-8 mt-12">
        {eventCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 
              ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="transition-all duration-300">{renderCards()}</div>
    </div>
  );
};

export default EventsDetail;
