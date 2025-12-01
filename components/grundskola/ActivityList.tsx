"use client";

import { Activity } from "@/lib/grundskola-data";
import { ActivityCard } from "./ActivityCard";

interface ActivityListProps {
    activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
    if (!activities || activities.length === 0) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} index={index} />
            ))}
        </div>
    );
}
