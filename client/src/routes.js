import aboutUs from "./pages/aboutUs.js";
import AddForum from "./pages/AddForum";
import Chat from "./pages/chat.js";
import Contacts from "./pages/contacts.js";
import main from "./pages/main.js";
import Support from "./pages/Support.js";

export const authRoutes=[
    {
        path: '/AddForum',
        Component: AddForum
    },
    {
        path: '/Chat',
        Component: Chat
    },
    {
        path: '/Contacts',
        Component: Contacts
    },
    {
        path: '/Support',
        Component: Support
    },
    {
        path: '/AboutUs',
        Component: aboutUs
    }
    // {
    //     path: '/AboutUs',
    //     Component: aboutUs
    // }
]
export const publicRoutes= [
    {
        path: '/Main',
        Component: main
    }
]