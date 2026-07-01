import WorkerRequestListCard from "./WorkerRequestListCard";

const requests = [
  {
    id: 1,
    customer: "Saba Tekle",
    avatar: "/api/placeholder/150/150",
    title: "Kitchen Plumbing Repair",
    location: "Bole, Addis Ababa",
    date: "Today • 10:00 AM",
    budget: "ETB 1,200",
    status: "Pending",
    description:
      "Kitchen sink is leaking underneath the cabinet. Looking for someone to inspect and repair it as soon as possible.",
  },
  {
    id: 2,
    customer: "Henok Alemu",
    avatar: "/api/placeholder/150/150",
    title: "Furniture Assembly",
    location: "Kazanchis, Addis Ababa",
    date: "Tomorrow • 09:00 AM",
    budget: "ETB 850",
    status: "Accepted",
    description:
      "Need help assembling a wardrobe, office desk and bookshelf purchased recently.",
  },
  {
    id: 3,
    customer: "Marta Girma",
    avatar: "/api/placeholder/150/150",
    title: "Bathroom Pipe Replacement",
    location: "CMC, Addis Ababa",
    date: "May 18 • 2:30 PM",
    budget: "Negotiable",
    status: "Completed",
    description:
      "Replace damaged bathroom pipes and inspect the existing plumbing system for leaks.",
  },
  {
    id: 4,
    customer: "Samuel Bekele",
    avatar: "/api/placeholder/150/150",
    title: "Outdoor Water Line Installation",
    location: "Piassa, Addis Ababa",
    date: "May 12 • 11:00 AM",
    budget: "ETB 2,400",
    status: "Declined",
    description:
      "Install a new outdoor water connection for a small residential garden.",
  },
];

export default function WorkerRequestList() {
  return (
    <div className="space-y-5">
      {requests.map((request) => (
        <WorkerRequestListCard key={request.id} request={request} />
      ))}
    </div>
  );
}
