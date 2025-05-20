import { Suspense, lazy } from "react";
import Loading from "./Loading";

const HackerRoom3D = lazy(() => import("./HackerRoom3D"));

export default function Scene3D() {
  return (
    <Suspense fallback={<Loading />}>
      <HackerRoom3D hackerRoomUrl="/assets/models/hacker_room/scene.gltf" />
    </Suspense>
  );
}
