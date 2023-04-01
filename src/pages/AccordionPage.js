import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "d12dqd",
      label: "Can I use React in my project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "d12dqdasds",
      label: "Can I use Javascript in my project?",
      content: "You can use Javascript on any project you want.",
    },
    {
      id: "d12dq23123d",
      label: "Can I use CSS in my project?",
      content: "You can use CSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
