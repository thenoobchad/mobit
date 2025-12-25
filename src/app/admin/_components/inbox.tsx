"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



import { markNotificationAsRead } from "@/actions/admin";


type Notifications = {
    id: string,
    userId: string,
    actionType: string,
    message: string,
    createdAt: Date,
    status:string | null
}

type NotificationsListType = Notifications[] | []

const data: NotificationsListType = [
    {
        id: "1",
        userId: "u1",
        actionType: "deposit",
        message: "User u1 made a deposit",
        createdAt: new Date(),
        status: "unread"
    },
    {
        id: "2",
        userId: "u2",
        actionType: "withdraw",
        message: "User u2 made a withdrawal",
        createdAt: new Date(),
        status: "unread"
    }
];

export const AdminInbox = ( ) => {
    const [notifications, setNotifications] = useState<Notifications[]>([])
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const unreadNotifs = (notifications.filter((notif) => notif.status === "unread")).length
    
    console.log(unreadNotifs)
    const router = useRouter()

    useEffect(() => { 
        const fetchNotifications = async () => {
            try {
                setNotifications(data)
                 setLoading(false);
            } catch (error) {
                setError("Failed to fetch notifications")
            } finally {
                setLoading(false)
            }
        }

        fetchNotifications()
    },[])

    const handleMarkAsRead = async (notificationId: string) => {
        try {
            await markNotificationAsRead(notificationId)
            setNotifications((prev) => prev.map((notification) => notification.id === notificationId ? { ...notification, status: "read" } : notification))
             
        } catch (error) {
            setError("Failed to mark notification as read")
        }
    }

    if(loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
      <div className="flex flex-col">
            <div className="relative flex" onClick={() => setIsOpen(!isOpen)}>
                <div className="cursor-pointer">✉️</div>

               {unreadNotifs !== 0 && <div className="h-2 w-2 rounded-full  bg-red-500 relative top-[2px] right-[6px]"/>}
            </div>
            {isOpen && (<div className="absolute  right-0 mt-6 p-2 text-sm">
                {notifications.length === 0 ? (
                    <p className="border p-1">
                      No messages...
                        </p>
                ) : (
                        <div className="bg-zinc-100 w-fit">
                            <button className="justify-end w-fit bg-red-400 px-2" onClick={() => setIsOpen(false)}>❌</button>
                            <ul className="border border-zinc-200  bg-white overflow-y-auto h-[200px] flex flex-col">
                            
                            
                            {notifications.map((notification, index) => (
                                <li onClick={() => handleMarkAsRead(notification.id)} key={index} className={`p-4 border-b border-zinc-300 ${notification.status === "unread" ? "bg-blue-100" : "bg-gray-100"}`}>
                                    <p>{notification.message}</p>
                                     <p className="text-xs">Time: {new Date(notification.createdAt).toLocaleString()}</p>
                                </li>
                               
                            ))}
                             
                            </ul>
                        </div>
                )}
            </div>)}
      </div>
  )
}