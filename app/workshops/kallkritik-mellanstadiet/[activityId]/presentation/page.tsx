import { notFound } from "next/navigation";
import { activities, activitiesById } from "@/lib/workshops/kallkritik";
import { PresentationView } from "@/components/workshops/kallkritik/PresentationView";

type Params = { activityId: string };

export function generateStaticParams(): Params[] {
  return activities.map((a) => ({ activityId: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { activityId } = await params;
  const activity = activitiesById[activityId];
  if (!activity) return {};
  return {
    title: `${activity.title} · Storskärm`,
  };
}

export default async function PresentationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { activityId } = await params;
  const activity = activitiesById[activityId];
  if (!activity) notFound();
  return <PresentationView activity={activity} />;
}
