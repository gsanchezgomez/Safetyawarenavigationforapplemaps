import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import prototypeVideo from "../imports/My_Movie_2.mp4";
import heroImage from "../imports/image.png";
import heroImage2 from "../imports/image-4.png";
import screenshot1 from "../imports/Screenshot_2026-05-24_at_11.26.18_PM.png";
import screenshot2 from "../imports/Screenshot_2026-05-24_at_11.25.40_PM.png";
import screenshot3 from "../imports/Screenshot_2026-05-24_at_11.24.06_PM_1.png";
import newCarouselImage from "../imports/image-3.png";
import carouselImage2 from "../imports/image-4.png";
import designChange1 from "../imports/Screenshot_2026-06-01_at_8.18.25_PM.png";
import designChange2 from "../imports/Screenshot_2026-06-01_at_8.19.06_PM.png";

export default function App() {
  const sliderRef = useRef<Slider>(null);
  const designChangesRef = useRef<Slider>(null);

  const designs = [
    {
      url: newCarouselImage,
      title: "Route Selection Overview",
      description: "The main directions interface allows users to choose between multiple route options and select their departure time. This screen serves as the entry point for comparing routes based on both travel time and safety preferences."
    },
    {
      url: carouselImage2,
      title: "Safety Preferences",
      description: "Users can customize their safety preferences to influence route recommendations. Options include well-lit streets, avoiding isolated areas, sidewalk-only routes, and proximity to open businesses. This allows riders to tailor navigation to their personal comfort and safety priorities."
    },
    {
      url: screenshot3,
      title: "Safety Check-In",
      description: "Participants wanted reassurance and support rather than immediate emergency escalation. This check-in system gently asks users if they are okay when unusual inactivity is detected during navigation."
    },
    {
      url: screenshot2,
      title: "Follow-Up Check-In",
      description: "Because participants often multitasked or ignored navigation temporarily, follow-up check-ins only appear after prolonged inactivity. This helps balance proactive safety support with user independence."
    },
    {
      url: screenshot1,
      title: "Notify Verification",
      description: "Users emphasized the importance of staying connected with trusted contacts during travel. This screen reassures users that their selected contacts were successfully notified."
    }
  ];

  const designChanges = [
    {
      url: designChange1,
      title: "Route Selection Screen",
      description: "Before: User testing showed that route labels such as 'Preferred 2' were unclear and did not immediately communicate why a route was being recommended. Participants wanted route options to be easier to compare and understand at a glance, especially when deciding between safety and travel time. After: To improve route comparison, we replaced vague route labels with descriptive labels such as 'Safety Route' and 'Fastest Route.' This helps users quickly identify the purpose of each route and make more informed navigation decisions without additional exploration."
    },
    {
      url: designChange2,
      title: "Safety Preferences Screen",
      description: "Before: The original design separated route preferences and safety settings into different controls. During testing, participants expressed uncertainty about how safety settings influenced route recommendations, making the customization process feel less intuitive. After: We streamlined the experience by integrating safety settings directly into the route preference workflow. Users can now customize factors such as well-lit streets, avoiding isolated areas, sidewalk only routes, and nearby businesses from a single location, creating a more cohesive and understandable route selection experience."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-neutral-200"
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="text-sm uppercase tracking-wider text-neutral-500">Case Study</div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl tracking-tight text-neutral-900">
              Beyond the Fastest Route
            </h1>
            <p className="mb-6 text-base italic text-neutral-400">
              "Helping transit riders make safer and more informed navigation decisions in unfamiliar environments."
            </p>
            <div className="flex items-center gap-8 text-sm text-neutral-500">
              <div>
                <div className="mb-1 uppercase tracking-wider">Team</div>
                <div className="text-neutral-900">Collaborative Project</div>
              </div>
              <div>
                <div className="mb-1 uppercase tracking-wider">Role</div>
                <div className="text-neutral-900">Sketches, User Research & Analysis, Prototyping & Wireframing</div>
              </div>
              <div>
                <div className="mb-1 uppercase tracking-wider">Platform</div>
                <div className="text-neutral-900">Apple Maps</div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-0 lg:justify-end"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
              <img
                src={heroImage2}
                alt="Safety preferences interface"
                className="relative h-auto w-[400px] object-contain drop-shadow-2xl"
              />
            </div>
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl" />
              <img
                src={heroImage}
                alt="Safety check-in interface"
                className="relative h-auto w-[300px] object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Statement Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 bg-neutral-50 py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-4xl tracking-tight text-neutral-900">Overview</h2>
          <div className="space-y-10">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                It's 9:30 PM, and you're heading home after a long day. The bus drops you off a few blocks from your destination, and your navigation app recommends the fastest route. As you glance at the map, questions begin to surface. Is the walk well-lit? Will there be other people around? Is there a sidewalk the entire way? Should you take the shorter route through a quiet neighborhood or the longer route along a busier street?
              </p>
              <p className="text-lg leading-relaxed text-neutral-700">
                Although navigation apps excel at helping users reach their destinations efficiently, they often leave these decisions up to the user. Through our research, we found that people routinely weigh factors such as lighting, foot traffic, accessibility, and familiarity when choosing how to travel, especially when navigating alone or in unfamiliar environments. Many participants described modifying suggested routes, sharing their location with friends, or relying on their own judgment to feel more comfortable during a trip.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700">
                This project explores how navigation can better support those decisions. By incorporating environmental context directly into route planning, we designed a safety-aware navigation experience that helps users evaluate routes based on both efficiency and comfort, empowering them to travel with greater confidence.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl tracking-tight text-neutral-900">Problem Statement</h3>
              <p className="text-lg leading-relaxed text-neutral-700">
                Transit navigation tools prioritize speed and distance, but often overlook the environmental and contextual factors riders use to judge comfort and personal safety. As a result, users are left to interpret unfamiliar routes on their own, making independent tradeoffs between efficiency and how safe or comfortable a path feels.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl tracking-tight text-neutral-900">Solution</h3>
              <p className="text-lg leading-relaxed text-neutral-700">
                We extended Apple Maps with a safety-aware public transit routing feature that helps users make more informed navigation decisions. Rather than only prioritizing speed, the system incorporates environmental factors such as lighting, foot traffic, nearby businesses, and pedestrian-friendly infrastructure. Users can compare route options, customize safety preferences, and understand why a route is being recommended before beginning their trip.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* User Research Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl tracking-tight text-neutral-900">User Research Findings</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 text-5xl text-neutral-300">01</div>
              <h3 className="mb-3 text-xl text-neutral-900">Observational Over Aspirational</h3>
              <p className="text-neutral-600">
                We observed how users interacted with existing navigation tools in real situations rather than asking what features they wanted. Users rarely followed apps exactly, instead they modified routes based on judgment about safety and the pedestrian experience.
              </p>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">02</div>
              <h3 className="mb-3 text-xl text-neutral-900">Environmental Evaluation</h3>
              <p className="text-neutral-600">
                Participants consistently evaluated routes based on lighting, street activity, nearby businesses, and sidewalk conditions. They used the map as reassurance, checking their physical surroundings more than the actaul app during navigation.
              </p>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">03</div>
              <h3 className="mb-3 text-xl text-neutral-900">Built-In Workarounds</h3>
              <p className="text-neutral-600">
                Users already rely on external safety systems such as location sharing, messaging apps, and route memorization. This indicates that safety is handled outside the navigation experience rather than in an integrated manner.
              </p>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">04</div>
              <h3 className="mb-3 text-xl text-neutral-900">Perceived vs. Objective Safety</h3>
              <p className="text-neutral-600">
                Safety is difficult to quantify as it depends heavily on context, familiarity, and personal experience. Our design focus shifted to supporting user judgment rather than replacing it.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Prototype Video */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 py-20"
      >
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-4xl tracking-tight text-neutral-900">Final Prototype</h2>
          <p className="mb-10 text-lg text-neutral-600">A walkthrough of the completed safety-aware navigation experience.</p>
          <div className="flex justify-center">
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", width: "min(800px, 100%)" }}>
              <video
                src={prototypeVideo}
                controls
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Design Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 bg-neutral-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="mb-3 text-4xl tracking-tight text-neutral-900">Design Iterations</h2>
            <p className="text-lg text-neutral-600">Key interface concepts and design solutions</p>
          </div>

          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {designs.map((design, index) => (
                <div key={index} className="outline-none">
                  <div className="px-2">
                    <div className="overflow-hidden rounded-lg bg-black shadow-2xl">
                      <div className="flex justify-center bg-black py-12">
                        <img
                          src={design.url}
                          alt={design.title}
                          className="h-[700px] w-auto object-contain"
                        />
                      </div>
                      <div className="bg-white p-8">
                        <h3 className="mb-2 text-2xl text-neutral-900">{design.title}</h3>
                        <p className="text-neutral-600">{design.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Custom Navigation */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-lg transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-lg transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Prototype User Testing Key Findings */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl tracking-tight text-neutral-900">Prototype User Testing Key Findings</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 text-5xl text-neutral-300">01</div>
              <h3 className="mb-3 text-xl text-neutral-900">Understanding & Concept Clarity</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Participants quickly understood the Safety Mode concept and its purpose.</li>
                <li>• The overall layout was seen as clear and easy to navigate.</li>
                <li>• Users generally understood that the feature supports route decisions beyond just speed.</li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">02</div>
              <h3 className="mb-3 text-xl text-neutral-900">Perceived Value & Use Cases</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Safety indicators (lighting, foot traffic, nearby businesses) were viewed as helpful for decision-making.</li>
                <li>• Users said they would likely use the feature in unfamiliar or potentially unsafe areas.</li>
                <li>• The concept was generally well-received and seen as useful in real-life contexts.</li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">03</div>
              <h3 className="mb-3 text-xl text-neutral-900">Safety Perception Differences</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Users defined "safety" differently depending on personal preference.</li>
                <li>• Some prioritized foot traffic and presence of people, while others prioritized lighting and visibility.</li>
              </ul>
            </div>
            <div>
              <div className="mb-4 text-5xl text-neutral-300">04</div>
              <h3 className="mb-3 text-xl text-neutral-900">Usability & Clarity Issues</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Route labels (e.g., "Preferred 2") were confusing and needed clearer naming.</li>
                <li>• Key information like ETA, route type, and safety indicators should be shown upfront.</li>
                <li>• Users wanted faster and easier comparison between route options (fastest, safest, balanced).</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl">
            <h3 className="mb-6 text-3xl tracking-tight text-neutral-900">Improvement Opportunities</h3>
            <ul className="space-y-3 text-lg text-neutral-700">
              <li>• Safety icons need clearer explanations, labels, or tooltips.</li>
              <li>• Information hierarchy should be improved so users can make decisions more quickly.</li>
              <li>• Enhance route comparison by presenting all options side-by-side for quicker decision-making.</li>
              <li>• Consider adding contextual notifications (e.g., "isolated stop avoided") to support safety and comfort.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Design Evolution */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 bg-neutral-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-4xl tracking-tight text-neutral-900">Design Evolution</h2>
            <p className="text-lg text-neutral-600">How user feedback shaped our interface decisions</p>
          </div>

          <div className="space-y-20">
            {designChanges.map((change, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="overflow-hidden rounded-xl bg-white shadow-xl"
              >
                <div className="grid gap-0 lg:grid-cols-5">
                  <div className="order-2 p-10 lg:order-1 lg:col-span-2 lg:p-12">
                    <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                      Iteration {index + 1}
                    </div>
                    <h3 className="mb-6 text-3xl tracking-tight text-neutral-900">{change.title}</h3>
                    <div className="space-y-5 text-base leading-relaxed text-neutral-700">
                      {change.description.split('After:').map((part, i) => (
                        <div key={i}>
                          {i === 0 ? (
                            <p>
                              <span className="font-semibold text-neutral-900">Before:</span>{' '}
                              {part.replace('Before:', '').trim()}
                            </p>
                          ) : (
                            <p>
                              <span className="font-semibold text-neutral-900">After:</span> {part.trim()}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="order-1 flex items-center justify-center lg:order-2 lg:col-span-3"
                    style={{ backgroundColor: '#666666' }}
                  >
                    <img
                      src={change.url}
                      alt={change.title}
                      className="h-auto w-full"
                      style={{ display: 'block' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-neutral-200 bg-white py-20"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl tracking-tight text-neutral-900">Designing for Confidence</h2>
          <p className="text-xl leading-relaxed text-neutral-600">
            By integrating safety and accessibility into route planning, we're transforming navigation from a purely efficiency-driven tool into a system that supports user confidence, independence, and well-being in everyday travel decisions.
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm text-neutral-500">© 2026 Safety-Aware Navigation Case Study</p>
        </div>
      </footer>
    </div>
  );
}
