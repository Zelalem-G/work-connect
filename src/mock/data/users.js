// Mock users used to seed the application on first launch.
//
// NOTE:
// - Passwords are stored in plain text ONLY because this is a frontend-only
//   mock application.
// - When the Go backend is connected, passwords will never exist here.
// - Authentication will be handled by the backend.

export const users = [
  {
    id: "cust-1",
    role: "customer",

    firstName: "Abel",
    lastName: "Bekele",

    email: "abel@example.com",
    password: "password123",

    phone: "+251911111111",
    city: "Addis Ababa",

    profileImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",

    createdAt: "2026-01-15T09:30:00Z",
  },

  {
    id: "cust-2",
    role: "customer",

    firstName: "Hana",
    lastName: "Tesfaye",

    email: "hana@example.com",
    password: "password123",

    phone: "+251922222222",
    city: "Bahir Dar",

    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",

    createdAt: "2026-02-03T14:20:00Z",
  },

  {
    id: "worker-1",
    role: "worker",

    firstName: "Samuel",
    lastName: "Kebede",

    email: "samuel@example.com",
    password: "password123",

    phone: "+251933333333",
    city: "Addis Ababa",

    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",

    createdAt: "2026-01-08T11:10:00Z",
  },

  {
    id: "worker-2",
    role: "worker",

    firstName: "Dawit",
    lastName: "Haile",

    email: "dawit@example.com",
    password: "password123",

    phone: "+251944444444",
    city: "Hawassa",

    profileImage:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",

    createdAt: "2026-03-11T16:40:00Z",
  },
];